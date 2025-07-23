import CustomBox from '@/style/CustomBox.style';
import React from 'react';
import DayOverviewBox from './dayOverviewBox';
import { Grid } from '@mui/material';
import TaskinfoCard from './taskCard';

 function AllTask({inProgressCard}) {  
    return (

        inProgressCard?.map((inProgressTask, index) => {
        const inProgressTasksCountPerDate = inProgressTask.tasks.filter(task => task.isCompleted === false)
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
                        <DayOverviewBox date={inProgressTask.dueDate} taskCount={inProgressTasksCountPerDate.length}/>
                    </CustomBox>
                    {/* DUE DATE OVERVIEW BOX END */}
                    <Grid container spacing={3}>
                        {
                            inProgressTask.tasks
                                .filter(taskInfo => taskInfo.isCompleted === false) // 🧹 Filter first
                                .map((taskInfo, taskIdx) => (
                                    <Grid item key={taskIdx}  size={{xs:12,sm:6, md:6, lg: 4, xl: 3}}>
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
