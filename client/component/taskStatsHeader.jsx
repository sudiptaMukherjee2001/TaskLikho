import React from 'react'
import CustomBox from '@/style/CustomBox.style'

function TaskStatsHeader({headerTypography,subHeaderTypography,headerText,subHeaderText}) {
  return (
    <CustomBox as="header"
            // border="2px solid red"
            marginBottom="1.8rem"
        >
            <CustomBox
                as="section"
                display="flex"
            >

                <h2 className={headerTypography}>
                   {headerText}
                </h2>
            </CustomBox>

            <h2 className={subHeaderTypography}>
               {subHeaderText}
            </h2>


        </CustomBox>
  )
}

export default TaskStatsHeader