import CustomBox from '@/app/style/CustomBox.style.js'
import React from 'react'
import { sidebarIcon } from '@/utils/SidebarItems.util.js'
function LeftsideBar() {
    return (
        <CustomBox
            minHeight='100vh'
            //border="3px solid red"
            sidebarBackground="sidebar"
            display="flex"
            flexDirection="column"
           justifyContent="space-between"
           

        >
            {/* Brand name and navigation menu start */}
            <CustomBox 
            //border="2px solid red"  
            padding="24px" >
                {/* Brand name start  */}
                <CustomBox as="header"
                    paddingBottom="24px"
                    // border="2px solid orange"
                    width="100%"
                    display="flex"
                    // justifyContent="center"
                >
                    <h1 className='sidebarTitle-laptop-layout'>
                        TaskLikho
                    </h1>
                </CustomBox>
                {/* Brand name end  */}
                {/* navigation menu start*/}
                <CustomBox as="section" width="100%" >
                    {
                        sidebarIcon.map((item, index) => (
                            <CustomBox key={index} className='sidebarItem-laptop-layout'>
                                <span className='icon'>{item.icon}</span>
                                <span className='name'>{item.name}</span>
                            </CustomBox>
                        ))

                    }
                </CustomBox>
                {/* navigation menu end*/}
            </CustomBox>
            {/* Brand name and navigation menu end */}
            {/* copyright section start */}
            <CustomBox as="footer"
                className='SideBar-footer-outer-laptop'
            >
                <h4 className='SideBar-footer-laptop'>
                    © 2025 TaskLikho
                </h4>
            </CustomBox>
            {/* copyright section start */}

        </CustomBox>
    )
}

export default LeftsideBar