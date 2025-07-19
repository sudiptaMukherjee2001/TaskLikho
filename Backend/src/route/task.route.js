import Router from 'express';
const router = Router();

import createTask from '../controller/createtask.controller.js';
import getAllTask from '../controller/getAllTask.controller.js';
import updateTaskStatus from '../controller/updateTaskStatus.controller.js';



// Route to get all tasks
router.route('/').get(getAllTask)
// Route to create a task
router.route('/create-task').post(createTask);
// Route to update a task status
router.route('/update-task-status').patch(updateTaskStatus);



export default router;