'use client'
import React, { useState } from 'react'
import CustomBox from '@/style/CustomBox.style'
import CustomChip from '@/style/CustomChip.style'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CustomCheckBox } from '@/style/CustomCheckBox.style';
import { updateTaskStatusReq } from '@/utils/UpdateTaskStatus.util.js';
function TaskinfoCard({ taskCard,
    taskStatusText,
    taskStatus,
    completdOn,
    duedate,
    createdOn,
    taskName,
    priority,
    taskId
}) {

    const handleCheckboxChange = async (e) => {
        const newStatus = e.target.checked;
        const reqBody = {
        taskId,
        isCompleted: newStatus,

        }
       await updateTaskStatusReq(reqBody);      
    }
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
                display="flex"
                // flexDirection="column"
                alignItems="center"
                marginTop="1rem"
                color='sidebar'
                padding="0.85rem"
                borderRadius="0.5rem"
                lineHeight="1.3rem"
            >
                {taskStatusText === "inprogress" ?
                    <CustomCheckBox color="success"
                        onChange={handleCheckboxChange}
                    /> : ""
                }
                <h4 className='task-name '>
                    {taskName}

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
                        Completed on {completdOn}
                    </CustomBox>
                    : ""
            }
            {/* For pendding page */}
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