import CustomBox from '@/style/CustomBox.style';
import React from 'react';
import DayOverviewBox from './dayOverviewBox';
import { Grid } from '@mui/material';
import TaskinfoCard from './taskCard';
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli';

async function AllTask() {
    const alltaskRes = await GetAllTaskReq();
  
    
    const inProgressCard = alltaskRes?.data?.filter((item) => {
        return item.tasks.some(task => task.isCompleted === false);
    })
    console.log("inProgressCard", inProgressCard);

    return (

        inProgressCard?.map((inProgressTask, index) => {
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
                        <DayOverviewBox date={inProgressTask.dueDate} />
                    </CustomBox>
                    {/* DUE DATE OVERVIEW BOX END */}
                    <Grid container spacing={3}>
                        {
                            inProgressTask.tasks
                                .filter(taskInfo => taskInfo.isCompleted === false) // 🧹 Filter first
                                .map((taskInfo, taskIdx) => (
                                    <Grid item key={taskIdx}  size={{ lg: 4, xl: 3 }}>
                                        <TaskinfoCard
                                            taskStatusText="inprogress"
                                            taskCard="inpogress-taskCard"
                                            taskStatus="task-inprogress"
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
        })
    )
}

export default AllTask;
