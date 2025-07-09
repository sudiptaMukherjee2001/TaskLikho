import CustomBox from '@/style/CustomBox.style'
import React from 'react'

function CompletedTaskHeader() {
    return (
        <CustomBox as="header"
            // border="2px solid red"
            marginBottom="1.8rem"
        >
            <CustomBox
                as="section"
                display="flex"
            >

                <h2 className='completed-task-timeline-header-typography'>
                    Completed Tasks
                </h2>
            </CustomBox>

            <h2 className='completed-task-timeline-sub-header-typography'>
                18 tasks completed
            </h2>


        </CustomBox>
    )
}

export default CompletedTaskHeader