import React from 'react'
import TaskStatsHeader from '@/component/taskStatsHeader'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskinfoCard from '@/component/taskCard'
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli.js'
import CustomBox from '@/style/CustomBox.style'
import DayOverviewBox from '@/component/dayOverviewBox'

async  function PendingPage() {
  // 1 get the current date
  // 2 logic for pednnign task display 
  // task status should be imcompleted and due date should be greater than current date
  const alltaskRes = await GetAllTaskReq();
  
const currentDate = new Date();
const pendingTask = alltaskRes?.data?.filter(item => {
  const prevDate = new Date(item.dueDate);
  return prevDate < currentDate && item.tasks.some(task => task.isCompleted === false);
});

console.log("pendingTask", pendingTask);
// getting total pending task count
const totalPendingTaskCount = pendingTask.reduce((acc, item) => {
  return acc + item.tasks.filter(task => task.isCompleted === false).length;
}, 0);
console.log("Total Pending Task Count:", totalPendingTaskCount);
  return (
    <>
      <TaskStatsHeader
        headerTypography="pending-task-timeline-header-typography"
        subHeaderTypography="pending-task-timeline-sub-header-typography"
        headerText="Pending Tasks"
        subHeaderText={`${totalPendingTaskCount} tasks awaiting completion`} 
      />
      {pendingTask?.map((dueTask, index) => {
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
              <DayOverviewBox date={dueTask.dueDate} />
            </CustomBox>
            {/* DUE DATE OVERVIEW BOX END */}
            <Grid container spacing={3}>
              {
                dueTask.tasks
                  .filter(taskInfo => taskInfo.isCompleted === false) // 🧹 Filter first
                  .map((taskInfo, taskIdx) => (
                    <Grid item key={taskIdx} size={{ lg: 4, xl: 3 }}>
                      <TaskinfoCard
                        taskStatusText="Pending"
                        duedate={dueTask.dueDate}
                        taskCard="pending-taskCard"
                        taskStatus="task-pending"
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
      {/* map the complete task card box */}
      
    </>
  )
}

export default PendingPage