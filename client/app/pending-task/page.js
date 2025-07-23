'use client'
import React, { useEffect, useState } from 'react'
import TaskStatsHeader from '@/component/taskStatsHeader'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskinfoCard from '@/component/taskCard'
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli.js'
import CustomBox from '@/style/CustomBox.style'
import DayOverviewBox from '@/component/dayOverviewBox'
import NotaskFoud from '@/component/notaskFoud'
import DialogForm from '@/component/dialogForm'

function PendingPage() {
  // 1 get the current date
  // 2 logic for pednnign task display 
  // task status should be imcompleted and due date should be greater than current date
     const [open, setOpen] = useState(false)
     const handleClickOpen = () => setOpen(true)
     const handleClose = () => setOpen(false)
     const [allTaskRes, setAllTaskRes] = useState();
  // ✅ Fetch once on initial page load
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const res = await GetAllTaskReq();
          console.log("All tasks response:", res);
          setAllTaskRes(res?.data || []);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
      fetchTasks();
    }, []);

  const currentDate = new Date();
  const pendingTask = allTaskRes?.filter(item => {
    const prevDate = new Date(item.dueDate);
    return prevDate < currentDate && item.tasks.some(task => task.isCompleted === false);
  });

  console.log("pendingTask", pendingTask);
  // getting total pending task count
  const totalPendingTaskCount = pendingTask?.reduce((acc, item) => {
    return acc + item.tasks.filter(task => task.isCompleted === false).length;
  }, 0);
  console.log("Total Pending Task Count:", totalPendingTaskCount);

  return (
    <>
      <TaskStatsHeader
        headerTypography="pending-task-timeline-header-typography"
        subHeaderTypography="pending-task-timeline-sub-header-typography"
        headerText="Pending Tasks"
       subHeaderText={`${totalPendingTaskCount?totalPendingTaskCount:0} tasks awaiting completion`} 
      />
      <CustomBox
        //border="2px solid pink"
        height={pendingTask?.length === 0 ? "74vh" : "none"}
      >

        {(pendingTask?.length === 0) ?
          <NotaskFoud
            avatar="/planing.jpg"
            headerText="No pending tasks right now! 🎯📋"
            subHeaderText="You’ve planned everything perfectly. Stay organized, stay ahead."
            cta="Want to prepare for what's next? Click on "
            handleClickOpen={handleClickOpen}
          /> :
          pendingTask?.map((dueTask, index) => {
            const pendingTaskCountPerDate = dueTask.tasks.filter(task => task.isCompleted === false);
            console.log("pendingTaskCount", pendingTaskCountPerDate);
            return (
              <CustomBox
                as="section"
                marginBottom="2rem"
                key={index}

              >

                {/* DUE DATE OVERVIEW BOX START */}
                <CustomBox
                  as="section"
                  className="day-overView-section"
                  display="flex"
                // border="2px solid red"
                >
                  <DayOverviewBox date={dueTask.dueDate} taskCount={pendingTaskCountPerDate.length} />
                </CustomBox>
                {/* DUE DATE OVERVIEW BOX END */}
                <Grid container spacing={3}>
                  {
                    dueTask.tasks
                      .filter(taskInfo => taskInfo.isCompleted === false) // 🧹 Filter first
                      .map((taskInfo, taskIdx) => (
                        <Grid item key={taskIdx} size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}>
                          <TaskinfoCard
                            taskStatusText="Pending"
                            duedate={dueTask.dueDate}
                            taskCard="pending-taskCard"
                            taskStatus="task-pending"
                            taskName={taskInfo.taskName}
                            priority={taskInfo.priority}
                            taskId={taskInfo._id}
                          />
                        </Grid>
                      ))
                  }
                </Grid>

              </CustomBox>
            )
          })}
      </CustomBox>

      <DialogForm open={open} handleClose={handleClose} />



      {/* map the complete task card box */}

    </>
  )
}

export default PendingPage