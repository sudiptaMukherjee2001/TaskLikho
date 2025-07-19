import CustomBox from '@/style/CustomBox.style';
import React from 'react';
import DayOverviewBox from './dayOverviewBox';
import { Grid } from '@mui/material';
import TaskinfoCard from './taskCard';
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli';

async function AllTask() {
    const alltaskRes = await GetAllTaskReq();
    const { data } = alltaskRes;
    console.log("From all task comp", data);

    return (
        <>
            {data.map((task, index) => {
                console.log("task", task.dueDate);

                return (
                    <CustomBox
                        key={index} // key for the outer CustomBox
                        as="section"
                        marginBottom="2rem"
                    >
                        {/* DUE DATE OVERVIEW BOX START */}
                        <CustomBox
                            as="section"
                            className="day-overView-section"
                            display="flex"
                            // border="2px solid red"
                        >
                            <DayOverviewBox date={task.dueDate} />
                        </CustomBox>
                        {/* DUE DATE OVERVIEW BOX END */}

                        {/* THIS GRID HOLDS ALL THE TASKS */}
                        <Grid container spacing={3}
                         >
                            {task?.tasks.map((taskInfo, taskIdx) => (
                                <Grid item key={taskIdx}
                                 size={{  lg: 4,xl:3 }}
                                 >
                                    <TaskinfoCard
                                        taskStatusText="inprogress"
                                        taskCard="inpogress-taskCard"
                                        taskStatus="task-inprogress"
                                        taskName={taskInfo.taskName}
                                        priority={taskInfo.priority}
                                        taskId={taskInfo._id}
                                      
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </CustomBox>
                );
            })}
        </>
    );
}

export default AllTask;
