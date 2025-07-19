import CustomBox from '@/style/CustomBox.style'
import CustomChip from '@/style/CustomChip.style'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function TaskinfoCard({ taskCard,
    taskStatusText,
    taskStatus,
    completdOn,
    duedate,
    createdOn,
    taskName,
    priority
}) {
    return (


        <CustomBox
            border="2px solid orange"
            padding="1.5rem"
            className={taskCard}

        >
            {/* top part start */}
            <CustomBox
                as="section"
                className='box-header'
                display="flex"
                justifyContent="space-between"
            >
                <CustomChip
                    label={taskStatusText}
                    className={taskStatus}
                />
                <CustomChip
                    label={priority}
                    className='task-priority-low'
                />
            </CustomBox>
            {/* top part end */}
            {/* Main task Content */}
            <CustomBox
                background="taskDisplayBackground"
                // display="flex"
                // flexDirection="column"
                marginTop="1rem"
                color='sidebar'
                padding="0.85rem"
                borderRadius="0.5rem"
                lineHeight="1.3rem"
            >
                <h4 className='task-name '>
                    {taskName}
                    {/* morning walk */}
                </h4>
            </CustomBox>
            {/* Main task Content END*/}
            {
                completdOn ?
                    <CustomBox
                        as="section"
                        className='CompletedOnDate'
                    >
                        <CheckCircleIcon className='tick-icon' />
                        Completed on Oct 15, 2024
                    </CustomBox>
                    : ""
            }
            {
                duedate ?
                    <CustomBox
                        as="section"
                        className='dueDateText'
                    >
                        <CalendarMonthIcon className='tick-icon' />
                        Due: Oct 20, 2024 (Overdue)
                    </CustomBox>
                    : ""
            }
            {
                createdOn ?
                    <CustomBox
                        as="section"
                        className='createdOnText'
                    >
                        <AccessTimeIcon className='tick-icon' />
                        Created on Oct 9, 2024
                    </CustomBox>
                    : ""
            }

        </CustomBox>


    )
}

export default TaskinfoCard