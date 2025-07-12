import React from 'react'
import TaskStatsPanel from '@/component/taskStatsPanel'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskStatsHeader from '@/component/taskStatsHeader'
import TaskinfoCard from '@/component/taskCard'

function CompltedTask() {
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
      <Grid container spacing={3}>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
          taskStatusText="Completed" 
          completdOn="Oct 11, 2024" 
          taskCard="completed-taskCard"
          taskStatus="task-Completed"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
          taskStatusText="Completed" 
          completdOn="Oct 11, 2024" 
          taskCard="completed-taskCard"
          taskStatus="task-Completed"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
          taskStatusText="Completed" 
          completdOn="Oct 11, 2024" 
          taskCard="completed-taskCard"
          taskStatus="task-Completed"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
          taskStatusText="Completed" 
          completdOn="Oct 11, 2024" 
          taskCard="completed-taskCard"
          taskStatus="task-Completed"
          />
          {/* TASK CARD END */}

        </Grid>
        
       

      </Grid>
    </>
  )
}

export default CompltedTask