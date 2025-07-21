'use client'
import React, { useState } from 'react'
import CustomBox from '@/style/CustomBox.style.js'
import { Button } from '@mui/material'
import DialogForm from './dialogForm.jsx'
import { CreateTaskBtn,CreateTaskFabBtn } from '@/style/CustomDialogBox.jsx'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function TaskTimelineHeader() {
  const [open, setOpen] = useState(false)
 


  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
       
            <CreateTaskFabBtn onClick={handleClickOpen} >
              <AddCircleOutlineIcon />
            </CreateTaskFabBtn>
            
            <CreateTaskBtn onClick={handleClickOpen} className='create-task-btn'>
              Create task
            </CreateTaskBtn>
        

      </CustomBox>
      {/* Dialog Controlled Here */}
      <DialogForm open={open} handleClose={handleClose} />
    </>
  )
}

export default TaskTimelineHeader