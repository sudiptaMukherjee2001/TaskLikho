import React from 'react'
import TaskStatsHeader from '@/component/taskStatsHeader'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskinfoCard from '@/component/taskCard'

function PendingPage() {
  return (
    <>
      <TaskStatsHeader
        headerTypography="pending-task-timeline-header-typography"
        subHeaderTypography="pending-task-timeline-sub-header-typography"
        headerText="Pending Tasks"
        subHeaderText="9 tasks awaiting completion"
      />
      {/* map the complete task card box */}
      <Grid container spacing={3}>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
            taskStatusText="Pending"
            duedate="Oct 11, 2024"
            taskCard="pending-taskCard"
            taskStatus="task-pending"
            createdOn="Oct 10, 2024"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
            taskStatusText="Pending"
            duedate="Oct 11, 2024"
            taskCard="pending-taskCard"
            taskStatus="task-pending"
            createdOn="Oct 10, 2024"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
            taskStatusText="Pending"
            duedate="Oct 11, 2024"
            taskCard="pending-taskCard"
            taskStatus="task-pending"
            createdOn="Oct 10, 2024"
          />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <TaskinfoCard
            taskStatusText="Pending"
            duedate="Oct 11, 2024"
            taskCard="pending-taskCard"
            taskStatus="task-pending"
            createdOn="Oct 10, 2024"
          />
          {/* TASK CARD END */}

        </Grid>


      </Grid>
    </>
  )
}

export default PendingPage