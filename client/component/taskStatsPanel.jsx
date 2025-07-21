import React from 'react'
import CustomBox from '@/style/CustomBox.style'
import { taskStatsPanel } from '@/utils/SidebarItems.util'
import { AnalyticsCardBackgrounds } from '@/utils/AnalyticsCard.util'
import { StatusCard } from '@/style/StatusCard.style'
import { Grid } from '@mui/material'

function TaskStatsPanel({stats}) {
    console.log("TaskStatsPanel stats", stats);
    
    return (
        <Grid container 
        spacing={3} 
        marginBottom="2rem"
        >
            {
                stats?.map((task, index) => (
                    <Grid
                        item
                        size={{xs:6, md:4, lg: 3 }}
                        key={index}
                    >
                        <StatusCard
                            display="flex"
                            alignItems="center"
                            padding="1rem"
                            key={index}
                            color={AnalyticsCardBackgrounds[index].textColor}
                            background={AnalyticsCardBackgrounds[index].background}
                            border='1px solid rgba(6, 182, 212, 0.2)'
                            borderRadius="1rem"
                        >
                            {/* CONTAINS THE CALENDER ICON */}
                            <StatusCard
                                as="span"
                                padding="0.5rem"
                                className='calenderBox'
                                border={`1px solid ${AnalyticsCardBackgrounds[index].textColor}`}
                                borderRadius="0.5rem"
                            >
                                {task?.icon}

                            </StatusCard>
                            {/* Date and num of task */}
                            <CustomBox
                                display="flex"
                                flexDirection="column"
                                marginLeft="1rem"
                            >
                                <span className='taskPanelText'>{task?.name}</span>
                                <span className='taskPanelText'>{task?.number}</span>
                            </CustomBox>
                        </StatusCard>
                    </Grid>
                ))
            }
        </Grid>





















    )
}

export default TaskStatsPanel