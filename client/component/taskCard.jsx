import CustomBox from '@/style/CustomBox.style'
import CustomChip from '@/style/CustomChip.style'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function CompleteTaskCard({completdOn}) {
    return (
        

            <CustomBox
                // border="2px solid orange"
                padding="1.5rem"
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
                    <h4 className='task-name '>
                        morning walk
                    </h4>
                </CustomBox>
                {/* Main task Content END*/}
                {
                    completdOn?
                    <CustomBox 
                    as="section" 
                    className='CompletedOnDate'
                    >
                        <CheckCircleIcon className='tick-icon'/>
                        Completed on Oct 15, 2024
                    </CustomBox>
                    :""
                }

            </CustomBox>
    
       
    )
}

export default CompleteTaskCard