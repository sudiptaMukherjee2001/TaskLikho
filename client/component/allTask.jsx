import CustomBox from '@/app/style/CustomBox.style'
import React from 'react'
import DayOverviewBox from './dayOverviewBox'
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import CustomChip from '@/app/style/CustomChip.style';
import ScheduleIcon from '@mui/icons-material/Schedule';

function AllTask() {
    return (
        <CustomBox

        >
            <CustomBox
               as="section"
               marginBottom="2rem"
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
                        <CustomBox
                            // border="2px solid orange"
                            padding="1.5rem"
                            // background="cardStatusBackgroundCompleted"
                            height="100%"
                            width="100%"
                            // borderRadius="1rem"
                            className='task-card'
                        >
                            {/* top part start */}
                            <CustomBox
                                as="section"
                                className='box-header'
                                display="flex"
                                justifyContent="space-between"
                            >
                                <CustomChip
                                    label="Completed"
                                    className='task-Completed'
                                />
                                <CustomChip
                                    label="Low"
                                    className='task-priority-low'
                                />



                            </CustomBox>
                            {/* top part end */}
                            {/* Main task Content */}
                            <CustomBox
                                background="taskDisplayBackground"
                                display="flex"
                                flexDirection="column"
                                marginTop="1rem"
                                color='sidebar'
                                padding="0.85rem"
                                borderRadius="0.5rem"
                                lineHeight="1.3rem"
                            >
                                <h4 className='task-name'>
                                    1. morning walk
                                </h4>
                                <h4 className='task-name'>
                                    2. Learn react
                                </h4>
                                <h4 className='task-name'>
                                    3. revice docker
                                </h4>
                                <h4 className='task-name'>
                                    4. Three tire architecture
                                </h4>
                                <h4 className='task-name'>

                                    5. evening walk
                                </h4>


                            </CustomBox>
                            {/* Main task Content END*/}
                            {/* TASK DUE DATE */}
                            <span
                                className='due-date'
                            >
                                <ScheduleIcon className='clock-icon' />
                                2024-10-11
                            </span>



                        </CustomBox>
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <CustomBox
                            // border="2px solid orange"
                            padding="1.5rem"
                            // background="cardStatusBackgroundCompleted"
                            height="100%"
                            width="100%"
                            // borderRadius="1rem"
                            className='task-card'
                        >
                            {/* top part start */}
                            <CustomBox
                                as="section"
                                className='box-header'
                                display="flex"
                                justifyContent="space-between"
                            >
                                <CustomChip
                                    label="Completed"
                                    className='task-Completed'
                                />
                                <CustomChip
                                    label="Low"
                                    className='task-priority-low'
                                />



                            </CustomBox>
                            {/* top part end */}
                            {/* Main task Content */}
                            <CustomBox
                                background="taskDisplayBackground"
                                display="flex"
                                flexDirection="column"
                                marginTop="1rem"
                                color='sidebar'
                                padding="0.85rem"
                                borderRadius="0.5rem"
                                lineHeight="1.3rem"
                            >
                                <h4 className='task-name'>
                                    1. morning walk
                                </h4>
                                <h4 className='task-name'>
                                    2. Learn react
                                </h4>
                                <h4 className='task-name'>
                                    3. revice docker
                                </h4>
                                <h4 className='task-name'>
                                    4. Three tire architecture
                                </h4>
                                <h4 className='task-name'>

                                    5. evening walk
                                </h4>


                            </CustomBox>
                            {/* Main task Content END*/}
                            {/* TASK DUE DATE */}
                            <span
                                className='due-date'
                            >
                                <ScheduleIcon className='clock-icon' />
                                2024-10-11
                            </span>



                        </CustomBox>
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <CustomBox
                            // border="2px solid orange"
                            padding="1.5rem"
                            // background="cardStatusBackgroundCompleted"
                            height="100%"
                            width="100%"
                            // borderRadius="1rem"
                            className='task-card'
                        >
                            {/* top part start */}
                            <CustomBox
                                as="section"
                                className='box-header'
                                display="flex"
                                justifyContent="space-between"
                            >
                                <CustomChip
                                    label="Completed"
                                    className='task-Completed'
                                />
                                <CustomChip
                                    label="Low"
                                    className='task-priority-low'
                                />



                            </CustomBox>
                            {/* top part end */}
                            {/* Main task Content */}
                            <CustomBox
                                background="taskDisplayBackground"
                                display="flex"
                                flexDirection="column"
                                marginTop="1rem"
                                color='sidebar'
                                padding="0.85rem"
                                borderRadius="0.5rem"
                                lineHeight="1.3rem"
                            >
                                <h4 className='task-name'>
                                    1. morning walk
                                </h4>
                                <h4 className='task-name'>
                                    2. Learn react
                                </h4>
                                <h4 className='task-name'>
                                    3. revice docker
                                </h4>
                                <h4 className='task-name'>
                                    4. Three tire architecture
                                </h4>
                                <h4 className='task-name'>

                                    5. evening walk
                                </h4>


                            </CustomBox>
                            {/* Main task Content END*/}
                            {/* TASK DUE DATE */}
                            <span
                                className='due-date'
                            >
                                <ScheduleIcon className='clock-icon' />
                                2024-10-11
                            </span>



                        </CustomBox>
                        {/* TASK CARD END */}

                    </Grid>
                    <Grid
                        item
                        size={{ lg: 4, xl: 3 }}
                    >
                        {/* TASK CARD START */}
                        <CustomBox
                            // border="2px solid orange"
                            padding="1.5rem"
                            // background="cardStatusBackgroundCompleted"
                            height="100%"
                            width="100%"
                            // borderRadius="1rem"
                            className='task-card'
                        >
                            {/* top part start */}
                            <CustomBox
                                as="section"
                                className='box-header'
                                display="flex"
                                justifyContent="space-between"
                            >
                                <CustomChip
                                    label="Completed"
                                    className='task-Completed'
                                />
                                <CustomChip
                                    label="Low"
                                    className='task-priority-low'
                                />



                            </CustomBox>
                            {/* top part end */}
                            {/* Main task Content */}
                            <CustomBox
                                background="taskDisplayBackground"
                                display="flex"
                                flexDirection="column"
                                marginTop="1rem"
                                color='sidebar'
                                padding="0.85rem"
                                borderRadius="0.5rem"
                                lineHeight="1.3rem"
                            >
                                <h4 className='task-name'>
                                    1. morning walk
                                </h4>
                                <h4 className='task-name'>
                                    2. Learn react
                                </h4>
                                <h4 className='task-name'>
                                    3. revice docker
                                </h4>
                                <h4 className='task-name'>
                                    4. Three tire architecture
                                </h4>
                                <h4 className='task-name'>

                                    5. evening walk
                                </h4>


                            </CustomBox>
                            {/* Main task Content END*/}
                            {/* TASK DUE DATE */}
                            <span
                                className='due-date'
                            >
                                <ScheduleIcon className='clock-icon' />
                                2024-10-11
                            </span>



                        </CustomBox>
                        {/* TASK CARD END */}

                    </Grid>
                </Grid>
                {/* THIS GRID HOLD ALL THE TASKS */}
            </CustomBox>
            {/* ------------------------------------------- */}
            {/* This below repeated code is just a ui  understand . Because when data will come
                from api then it should be look like this . */}
            {/* ------------------------------------------- */}
            <CustomBox
                as="section"
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
                    <CustomBox
                        // border="2px solid orange"
                        padding="1.5rem"
                        // background="cardStatusBackgroundCompleted"
                        height="100%"
                        width="100%"
                        // borderRadius="1rem"
                        className='task-card'
                    >
                        {/* top part start */}
                        <CustomBox
                            as="section"
                            className='box-header'
                            display="flex"
                            justifyContent="space-between"
                        >
                            <CustomChip
                                label="Completed"
                                className='task-Completed'
                            />
                            <CustomChip
                                label="Low"
                                className='task-priority-low'
                            />



                        </CustomBox>
                        {/* top part end */}
                        {/* Main task Content */}
                        <CustomBox
                            background="taskDisplayBackground"
                            display="flex"
                            flexDirection="column"
                            marginTop="1rem"
                            color='sidebar'
                            padding="0.85rem"
                            borderRadius="0.5rem"
                            lineHeight="1.3rem"
                        >
                            <h4 className='task-name'>
                                1. morning walk
                            </h4>
                            <h4 className='task-name'>
                                2. Learn react
                            </h4>
                            <h4 className='task-name'>
                                3. revice docker
                            </h4>
                            <h4 className='task-name'>
                                4. Three tire architecture
                            </h4>
                            <h4 className='task-name'>

                                5. evening walk
                            </h4>


                        </CustomBox>
                        {/* Main task Content END*/}
                        {/* TASK DUE DATE */}
                        <span
                            className='due-date'
                        >
                            <ScheduleIcon className='clock-icon' />
                            2024-10-11
                        </span>



                    </CustomBox>
                    {/* TASK CARD END */}

                </Grid>
                <Grid
                    item
                    size={{ lg: 4, xl: 3 }}
                >
                    {/* TASK CARD START */}
                    <CustomBox
                        // border="2px solid orange"
                        padding="1.5rem"
                        // background="cardStatusBackgroundCompleted"
                        height="100%"
                        width="100%"
                        // borderRadius="1rem"
                        className='task-card'
                    >
                        {/* top part start */}
                        <CustomBox
                            as="section"
                            className='box-header'
                            display="flex"
                            justifyContent="space-between"
                        >
                            <CustomChip
                                label="Completed"
                                className='task-Completed'
                            />
                            <CustomChip
                                label="Low"
                                className='task-priority-low'
                            />



                        </CustomBox>
                        {/* top part end */}
                        {/* Main task Content */}
                        <CustomBox
                            background="taskDisplayBackground"
                            display="flex"
                            flexDirection="column"
                            marginTop="1rem"
                            color='sidebar'
                            padding="0.85rem"
                            borderRadius="0.5rem"
                            lineHeight="1.3rem"
                        >
                            <h4 className='task-name'>
                                1. morning walk
                            </h4>
                            <h4 className='task-name'>
                                2. Learn react
                            </h4>
                            <h4 className='task-name'>
                                3. revice docker
                            </h4>
                            <h4 className='task-name'>
                                4. Three tire architecture
                            </h4>
                            <h4 className='task-name'>

                                5. evening walk
                            </h4>


                        </CustomBox>
                        {/* Main task Content END*/}
                        {/* TASK DUE DATE */}
                        <span
                            className='due-date'
                        >
                            <ScheduleIcon className='clock-icon' />
                            2024-10-11
                        </span>



                    </CustomBox>
                    {/* TASK CARD END */}

                </Grid>
                <Grid
                    item
                    size={{ lg: 4, xl: 3 }}
                >
                    {/* TASK CARD START */}
                    <CustomBox
                        // border="2px solid orange"
                        padding="1.5rem"
                        // background="cardStatusBackgroundCompleted"
                        height="100%"
                        width="100%"
                        // borderRadius="1rem"
                        className='task-card'
                    >
                        {/* top part start */}
                        <CustomBox
                            as="section"
                            className='box-header'
                            display="flex"
                            justifyContent="space-between"
                        >
                            <CustomChip
                                label="Completed"
                                className='task-Completed'
                            />
                            <CustomChip
                                label="Low"
                                className='task-priority-low'
                            />



                        </CustomBox>
                        {/* top part end */}
                        {/* Main task Content */}
                        <CustomBox
                            background="taskDisplayBackground"
                            display="flex"
                            flexDirection="column"
                            marginTop="1rem"
                            color='sidebar'
                            padding="0.85rem"
                            borderRadius="0.5rem"
                            lineHeight="1.3rem"
                        >
                            <h4 className='task-name'>
                                1. morning walk
                            </h4>
                            <h4 className='task-name'>
                                2. Learn react
                            </h4>
                            <h4 className='task-name'>
                                3. revice docker
                            </h4>
                            <h4 className='task-name'>
                                4. Three tire architecture
                            </h4>
                            <h4 className='task-name'>

                                5. evening walk
                            </h4>


                        </CustomBox>
                        {/* Main task Content END*/}
                        {/* TASK DUE DATE */}
                        <span
                            className='due-date'
                        >
                            <ScheduleIcon className='clock-icon' />
                            2024-10-11
                        </span>



                    </CustomBox>
                    {/* TASK CARD END */}

                </Grid>
                <Grid
                    item
                    size={{ lg: 4, xl: 3 }}
                >
                    {/* TASK CARD START */}
                    <CustomBox
                        // border="2px solid orange"
                        padding="1.5rem"
                        // background="cardStatusBackgroundCompleted"
                        height="100%"
                        width="100%"
                        // borderRadius="1rem"
                        className='task-card'
                    >
                        {/* top part start */}
                        <CustomBox
                            as="section"
                            className='box-header'
                            display="flex"
                            justifyContent="space-between"
                        >
                            <CustomChip
                                label="Completed"
                                className='task-Completed'
                            />
                            <CustomChip
                                label="Low"
                                className='task-priority-low'
                            />



                        </CustomBox>
                        {/* top part end */}
                        {/* Main task Content */}
                        <CustomBox
                            background="taskDisplayBackground"
                            display="flex"
                            flexDirection="column"
                            marginTop="1rem"
                            color='sidebar'
                            padding="0.85rem"
                            borderRadius="0.5rem"
                            lineHeight="1.3rem"
                        >
                            <h4 className='task-name'>
                                1. morning walk
                            </h4>
                            <h4 className='task-name'>
                                2. Learn react
                            </h4>
                            <h4 className='task-name'>
                                3. revice docker
                            </h4>
                            <h4 className='task-name'>
                                4. Three tire architecture
                            </h4>
                            <h4 className='task-name'>

                                5. evening walk
                            </h4>


                        </CustomBox>
                        {/* Main task Content END*/}
                        {/* TASK DUE DATE */}
                        <span
                            className='due-date'
                        >
                            <ScheduleIcon className='clock-icon' />
                            2024-10-11
                        </span>



                    </CustomBox>
                    {/* TASK CARD END */}

                </Grid>
            </Grid>
            {/* THIS GRID HOLD ALL THE TASKS */}
            </CustomBox>

        </CustomBox>
    )
}

export default AllTask