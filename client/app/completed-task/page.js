import React from 'react'
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
  


  //Get the Current Date :=>
  const date = new Date();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  console.log(formattedDate);

  const completedCard = alltaskRes?.data?.filter((item) => {
    return item.tasks.some(task => task.isCompleted === true);
  })
  console.log("completedCard", completedCard);


  return (
    <>
      <TaskStatsHeader
        headerTypography="completed-task-timeline-header-typography"
        subHeaderTypography="completed-task-timeline-sub-header-typography"
        headerText="Completed Tasks"
        subHeaderText="18 tasks completed"
      />
      <TaskStatsPanel />
      {/* map the complete task card box */}
      {completedCard?.map((completedTask, index) => {
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
              <DayOverviewBox date={completedTask.dueDate} />
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