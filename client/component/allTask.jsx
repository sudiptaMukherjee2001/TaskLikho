import CustomBox from '@/app/style/CustomBox.style'
import React from 'react'
import DayOverviewBox from './dayOverviewBox'

function AllTask() {
    return (
        <>
        {/*  */}
        <CustomBox as="section" className='day-overView-section' 
        display="flex"
        border="2px solid red"
        >
           <DayOverviewBox/>
        </CustomBox>
          
        </>
    )
}

export default AllTask