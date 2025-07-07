'use client'
import React, { useState } from 'react'
import CustomBox from '@/style/CustomBox.style.js'
import { Button } from '@mui/material'
import DialogForm from './dialogForm.jsx'
import { CreateTaskBtn } from '@/style/CustomDialogBox.jsx'

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
    // marginBottom="2.5rem"
    paddingInline="2rem"
    >
    <h2 className='task-timeline-header-typography'>
        Task Timeline
    </h2>
    <CreateTaskBtn  onClick={handleClickOpen}>
      Create task
    </CreateTaskBtn>
   </CustomBox>
   {/* Dialog Controlled Here */}
      <DialogForm open={open} handleClose={handleClose} />
    </>
  )
}

export default TaskTimelineHeader