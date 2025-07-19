'use client'
import CustomBox from '@/style/CustomBox.style.js'
import React from 'react'
import { sidebarIcon } from '@/utils/SidebarItems.util.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function LeftsideBar() {
    const pathname = usePathname();
    return (
        <CustomBox
            minHeight='100vh'
            //border="3px solid red"
            background="sidebar"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            padding="24px"

        >
            {/* Brand name and navigation menu start */}
            <CustomBox
            >
                {/* Brand name start  */}
                <CustomBox as="header"
                    // border="2px solid orange"
                    width="100%"
                    display="flex"
                    justifyContent="center"
                >
                    <h1 className='sidebarTitle-laptop-layout'>
                        TaskLikho
                    </h1>
                </CustomBox>
                {/* Brand name end  */}
                {/* navigation menu start*/}
                <CustomBox as="section"
                    width="100%"
                    // border="2px solid red"
                    marginTop="2.5rem"

                >
                    {
                        sidebarIcon.map((item, index) => (
                            <CustomBox key={index} className={`${pathname === item.link?"sidebarItem-laptop-layout-active-testing":"sidebarItem-laptop-layout-inActive-testing"}`}

                            >
                                <Link href={item.link}>
                            
                                <span className='icon'>{item.icon}</span>
                                <span className='name'>{item.name}</span>
                        </Link>

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
                padding="24px"
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