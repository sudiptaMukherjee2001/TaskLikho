import CustomBox from '@/app/style/CustomBox.style'
import React from 'react'

function TaskTimelineHeader() {
  return (
   <CustomBox as="header"
    // border="2px solid red" 
    display="flex"
    marginBottom="2.5rem"
    >
    <h2 className='task-timeline-header-typography'>
        Task Timeline
    </h2>
   </CustomBox>
  )
}

export default TaskTimelineHeader