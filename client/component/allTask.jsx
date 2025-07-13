import CustomBox from '@/style/CustomBox.style'
import React from 'react'
import DayOverviewBox from './dayOverviewBox'
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import CustomChip from '@/style/CustomChip.style';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TaskinfoCard from './taskCard';

function AllTask() {
    return (
        <  >
            <CustomBox
                /* this box wrap the date and task of one date . We need to map here */
                as="section"
                marginBottom="2rem"
            // border="2px solid red"

            >
                {/* DUE DATE OVERVIEW BOX START */}
                <CustomBox as="section" className='day-overView-section'
                    display="flex"
                // border="2px solid red"
                >
                    <DayOverviewBox />
                </CustomBox>
                {/* DUE DATE OVERVIEW BOX END */}
                {/* THIS GRID HOLD ALL THE TASKS */}
                <Grid container spacing={3}>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>



                </Grid>
                {/* THIS GRID HOLD ALL THE TASKS */}
            </CustomBox>
            {/* ------------------------------------------- */}
            {/* This below repeated CustomBox is just a ui  understand . Because when data will come
                from api then it should be look like this . */}
            {/* ------------------------------------------- */}
            <CustomBox
                /* this box wrap the date and task of one date . We need to map here */
                as="section"
                marginBottom="2rem"
            // border="2px solid red"

            >
                {/* DUE DATE OVERVIEW BOX START */}
                <CustomBox as="section" className='day-overView-section'
                    display="flex"
                // border="2px solid red"
                >
                    <DayOverviewBox />
                </CustomBox>
                {/* DUE DATE OVERVIEW BOX END */}
                {/* THIS GRID HOLD ALL THE TASKS */}
                <Grid container spacing={3}>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <TaskinfoCard
                            taskStatusText="inpogress"

                            taskCard="completed-taskCard"
                            taskStatus="task-inprogress"
                        />
                        {/* TASK CARD END */}

                    </Grid>



                </Grid>
                {/* THIS GRID HOLD ALL THE TASKS */}
            </CustomBox>

        </>
    )
}

export default AllTask