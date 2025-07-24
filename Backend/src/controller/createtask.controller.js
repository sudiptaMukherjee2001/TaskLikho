import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import APiResonse from '../utils/apiResponse.js';
import { TaskCreation } from '../model/taskCreation.model.js';
import { google } from "googleapis";
const createTask = asyncHandler(async (req, res) => {

   const { tasks, dueDate } = req.body;
   const accessToken = req.body.accessToken;
   console.log("Accesstoken==>", accessToken)
   if (!accessToken) {
      console.log("No access token provided. Skipping calendar sync.");
   }
   const calendar = google.calendar({ version: 'v3' });
   const auth = new google.auth.OAuth2(); // Perfect!
   auth.setCredentials({ access_token: accessToken });
   const summaryText = tasks.map(task => task.taskName).join(', '); // Convert array of task names into comma-separated string
   console.log("summaryText", summaryText);

   const event = {
      summary: `Tasks: ${summaryText}`, // or task name
      description: `Task priorities: ${tasks.map(task => `${task.taskName} (${task.priority})`).join(', ')}`,
      start: {
         date: dueDate,
      },
      end: {
         date: dueDate,
      },
   };

   console.log("event==>", event);
   try {
      await calendar.events.insert({
         auth,
         calendarId: 'primary',
         requestBody: event,
      });
      console.log("✅ Event inserted into Google Calendar");
   } catch (err) {
      console.error("❌ Calendar event insertion failed:", err.message);
      // If error is due to auth failure
      if (
         err?.response?.status === 401 ||
         err?.message?.includes("invalid_grant") ||
         err?.message?.includes("Invalid Credentials")
      ) {
         return res.status(401).json({ error: "invalid_token" });
      }
   }

   if (!dueDate || !Array.isArray(tasks) || tasks.length === 0) {
      throw new ApiError("Please provide dueDate and at least one task", 400);
   }

   // check if tasks is an array and has at least taskName or priority
   for (const task of tasks) {
      if (!task.taskName || !task.priority) {
         throw new ApiError("Each task must have a taskName and priority", 400);
      }
   }
   const taskDetails = {
      tasks,
      dueDate
   }
   const task = await TaskCreation.create(taskDetails);

   //check if task is created successfully or not
   const createdTask = await TaskCreation.findById(task._id);

   if (!createdTask) {
      throw new ApiError("Task creation failed", 500);
   }

   return res.status(201).json(
      new APiResonse(201
         , "Task created successfully",
         createdTask
      )
   )
})


export default createTask;

//BREAKING DOWN THE TASK CREATION PROCESS :->
// get the task details from the request body
//we need to validate the request body
//Note :  if user gives due date in past then we will not allow it - not publish at this time
/*create a task object because we are using nosql database and here we store as a onject . and call create method of model*/
// check for user is created or not
// if user is not created then we will show error message
// if user is created then we will allow to create task and return the response