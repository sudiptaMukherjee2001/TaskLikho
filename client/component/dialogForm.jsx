import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, Typography, MenuItem } from '@mui/material'
import { CustomDialogBox, StyledInput, CreateTaskBtn, CancelTaskModal } from '@/style/CustomDialogBox';
import { useFieldArray, useForm } from 'react-hook-form';
import CustomBox from '@/style/CustomBox.style';
import { Grid } from "@mui/material";
import TaskListSection from './taskListSection';
import { createTaskReq } from '@/utils/CreateReq.util.js';

function DialogForm({ open, handleClose }) {
  const [taskName, setTaskName] = useState('');
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      tasks: [{ name: '', priority: 'Low' }],
      dueDate: ''
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tasks'
  });
  const onSubmit = async (data) => {
    const finalData = {
      dueDate: data.dueDate,
      tasks: data.tasks.map((task)=>(
        {
          taskName: task.name,
          priority: task.priority 
        }
      ))
    }
    console.log('finalData:', finalData);// this finalData will be sent to the server
    await createTaskReq(finalData);


  }
  console.log("sdfsf sFields:", fields);

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

      <form component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Task name */}
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={1}
          >
            <Grid
              item
              size={{ lg: 10, xl: 10 }}
              className='leftSidebar'
            >

              <StyledInput
                // label="Task Title"
                placeholder="Enter Your task"
                variant="outlined"
                fullWidth
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              // error={!taskName && showError} // optional for validation
              // helperText={!taskName && showError ? 'Task name is required' : ''}
              />
            </Grid>
            <Grid
              item
              size={{ lg: 2, xl: 2 }}
            //  border={"2px solid red"}
            >

              <CreateTaskBtn
                type="button"
                onClick={() => {
                  append({ name: taskName, priority: '' });
                  setTaskName(''); // reset input
                }
                }
                padding="0.5rem 0.5rem"
                width="100%"

              >
                Add task
              </CreateTaskBtn>
            </Grid>
          </Grid>

          {/* Due data */}
          <StyledInput
            // label="Due Date"
            type="date"
            placeholder="Select the date"
            fullWidth
            {...register('dueDate', { required: 'date is required' })}
            error={!!errors.dueDate}
            helperText={errors.dueDate?.message}

          />

          {/* TaskListSection */}
          <TaskListSection
            fields={fields}
            register={register}
            errors={errors}
            remove={remove}
          />

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
            type="submit"

          >
            Create Task
          </CreateTaskBtn>
        </DialogActions>
      </form>

    </CustomDialogBox>
  )
}

export default DialogForm

{/* <StyledInput
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
*/}