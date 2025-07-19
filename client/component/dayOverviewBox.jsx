import React from 'react'
import CustomBox from '@/style/CustomBox.style'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function DayOverviewBox({date}) {
    return (
        // Date box
        <CustomBox
            as="article"
            
            display="flex"
            alignItems="center"
            paddingInline="1.5rem"
            paddingBlock="0.8rem"
            className='day-overviewBox'
            marginBottom="2rem"
        >
            {/* CONTAINS THE CALENDER ICON */}
            <CustomBox
                as="span"
                padding="0.6rem"
                className='calenderBox'
            >
                <CalendarMonthIcon />

            </CustomBox>
            {/* Date and num of task */}
            <CustomBox
                display="flex"
                flexDirection="column"
                marginLeft="1rem"
            >
                <span className='date'>{date}</span>
                <span className='sud-text'>6 tasks</span>
            </CustomBox>

        </CustomBox>
    )
}

export default DayOverviewBox