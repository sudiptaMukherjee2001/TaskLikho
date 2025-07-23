
import React from 'react'
import CustomBox from '@/style/CustomBox.style.js'
import { Button } from '@mui/material'
import { CreateTaskBtn,CreateTaskFabBtn } from '@/style/CustomDialogBox.jsx'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function TaskTimelineHeader({handleClickOpen}) {
 
  return (
    <>
      <CustomBox as="header"
        // border="2px solid red" 
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.8rem"
      >
        <h2 className='task-timeline-header-typography'>
          Task Timeline
        </h2>
            {/* for mobile */}
            <CreateTaskFabBtn onClick={handleClickOpen} >
              <AddCircleOutlineIcon />
            </CreateTaskFabBtn>
           {/* for large screen */}
            <CreateTaskBtn onClick={handleClickOpen} className='create-task-btn' borderRadius="0.2rem">
              Create task
            </CreateTaskBtn>
        

      </CustomBox>
    
    </>
  )
}

export default TaskTimelineHeader