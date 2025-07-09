import React from 'react'
import CompletedTaskHeader from '@/component/completedTaskHeader'
import TaskStatsPanel from '@/component/taskStatsPanel'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'

function CompltedTask() {
  return (
    <>
      <CompletedTaskHeader />
      <TaskStatsPanel />
      {/* map the complete task card box */}
      <Grid container spacing={3}>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <CompleteTaskCard  completdOn="Oct 11, 2024" />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <CompleteTaskCard  completdOn="Oct 11, 2024" />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <CompleteTaskCard  completdOn="Oct 11, 2024" />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <CompleteTaskCard  completdOn="Oct 11, 2024" />
          {/* TASK CARD END */}

        </Grid>
        <Grid
          item
          size={{ lg: 4, xl: 3 }}
        >
          {/* TASK CARD START */}
          <CompleteTaskCard  completdOn="Oct 11, 2024" />
          {/* TASK CARD END */}

        </Grid>
       
      </Grid>
    </>
  )
}

export default CompltedTask