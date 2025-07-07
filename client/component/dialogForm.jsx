import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, Typography, MenuItem } from '@mui/material'
import { CustomDialogBox, StyledInput, CreateTaskBtn, CancelTaskModal} from '@/style/CustomDialogBox';

function DialogForm({ open, handleClose }) {
  return (
    <CustomDialogBox
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'transparent', background: 'linear-gradient(to right, #4facfe, #00f2fe)', WebkitBackgroundClip: 'text', textAlign: 'center' }}>
        Create New Task
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <StyledInput
          // label="Task Title"
          placeholder="Enter Your task"
          variant="outlined"
          fullWidth

        />

        <StyledInput
          // label="Due Date"
          type="date"
          placeholder="Select the date"
          fullWidth

        />
        <StyledInput
          select
          fullWidth   
        >
           <MenuItem value="" disabled>
    Choose Priority
  </MenuItem>
          <MenuItem value="high">
            <span style={{ color: '#f87171' }}>🔴 High Priority</span>
          </MenuItem>
          <MenuItem value="medium">🟠 Medium Priority</MenuItem>
          <MenuItem value="low">🟢 Low Priority</MenuItem>
        </StyledInput>
      </DialogContent>

      <DialogActions sx={{ padding: '1rem', justifyContent: 'space-between' }}>
        <CancelTaskModal
          onClick={handleClose}
        
        >
          Cancel
        </CancelTaskModal>
        <CreateTaskBtn
          onClick={() => {
            // handle create task logic
            // handleClose();
          }}
        
        >
          Create Task
        </CreateTaskBtn>
      </DialogActions>
    </CustomDialogBox>
  )
}

export default DialogForm