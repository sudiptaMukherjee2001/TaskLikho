import React from 'react'
import TaskStatsHeader from '@/component/taskStatsHeader'

function PendingPage() {
  return (
    <>
    <TaskStatsHeader
    headerTypography="pending-task-timeline-header-typography"
    subHeaderTypography="pending-task-timeline-sub-header-typography"
    headerText="Pending Tasks"
    subHeaderText="9 tasks awaiting completion"
    />
    </>
  )
}

export default PendingPage