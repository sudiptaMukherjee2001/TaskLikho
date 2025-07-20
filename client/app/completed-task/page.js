
import TaskStatsPanel from '@/component/taskStatsPanel'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskStatsHeader from '@/component/taskStatsHeader'
import TaskinfoCard from '@/component/taskCard'
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli'
import CustomBox from '@/style/CustomBox.style'
import DayOverviewBox from '@/component/dayOverviewBox'

async function CompltedTask() {

  const alltaskRes = await GetAllTaskReq();
  
  // Filter completed tasks
  const completedCard = alltaskRes?.data?.filter((item) => {
    return item.tasks.some(task => task.isCompleted === true);
  })
  console.log("completedCard", completedCard);

const totalCompletedTaskCount = completedCard.reduce((acc, item) => {
  return acc + item.tasks.filter(task => task.isCompleted === true).length;
}, 0);

// total task per date
completedCard.forEach(item => {
  const completedTasks = item.tasks.filter(task => task.isCompleted === true);

  console.log("Total completedCard Task Count:", completedTasks.length);
});

  return (
    <>
      <TaskStatsHeader
        headerTypography="completed-task-timeline-header-typography"
        subHeaderTypography="completed-task-timeline-sub-header-typography"
        headerText="Completed Tasks"
        subHeaderText={`${totalCompletedTaskCount} task has completed`} 
      />
      <TaskStatsPanel />
      {/* map the complete task card box */}
      {completedCard?.map((completedTask, index) => {
         const completedTasks = completedTask.tasks.filter(task => task.isCompleted === true);
        return (
          <CustomBox
            as="section"
            marginBottom="2rem"
            key={index}
          >
            {/* DUE DATE OVERVIEW BOX START */}
            <CustomBox
              as="section"
              className="day-overView-section"
              display="flex"
            // border="2px solid red"
            >
              <DayOverviewBox date={completedTask.dueDate} taskCount={completedTasks.length}/>
            </CustomBox>
            {/* DUE DATE OVERVIEW BOX END */}
            <Grid container spacing={3}>
              {
                completedTask.tasks
                  .filter(taskInfo => taskInfo.isCompleted === true) // 🧹 Filter first
                  .map((taskInfo, taskIdx) => (
                    <Grid item key={taskIdx} size={{ lg: 4, xl: 3 }}>
                      <TaskinfoCard
                        taskStatusText="Completed"
                        completdOn={completedTask.dueDate}
                        taskCard="completed-taskCard"
                        taskStatus="task-Completed"
                        taskName={taskInfo.taskName}
                        priority={taskInfo.priority}
                        taskId={taskInfo._id}
                      />
                    </Grid>
                   ))
              } 
            </Grid>

          </CustomBox>
        )
      })
      }

    </>
  )
}

export default CompltedTask