'use client'
import CustomBox from '@/style/CustomBox.style.js'
import React from 'react'
import { sidebarIcon } from '@/utils/SidebarItems.util.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@mui/material'
import NavBarBoxForMobile from '@/style/NavBarBoxForMobile.style.js'
// TSESTING
import { useSession, signIn, signOut } from 'next-auth/react';
function LeftsideBar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    return (
        <>
            {/* Navbar for mobile screen */}
            <NavBarBoxForMobile background="sidebar">
                {sidebarIcon.map((item, index) => (
                    <Link href={item.link} key={index}>
                        {item.icon}
                    </Link>
                ))}
            </NavBarBoxForMobile>


            {/* Navbard for laptop */}
            <CustomBox
                minHeight='100vh'
                //border="3px solid red"
                background="sidebar"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                padding="24px"
                className='sideBar-laptop'
            >
                {/* Brand name and navigation menu start */}
                <CustomBox>
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
                                <CustomBox key={index} className={`${pathname === item.link ? "sidebarItem-laptop-layout-active-testing" : "sidebarItem-laptop-layout-inActive-testing"}`}>
                                    <Link href={item.link} className='sidebarItem-laptop-layout-link'>
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
                {/* TESTING  */}
                <div>
                    {session ? (
                        <>
                            <p>Welcome, {session.user.name}</p>
                            <button onClick={() => signOut()}>Logout</button>
                        </>
                    ) : (
                        <button onClick={() => signIn('google')}>Sign in with Google</button>
                    )}
                </div>





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

        </>
    )
}

export default LeftsideBar

// 