'use client'
import React from 'react'
import CustomBox from '@/style/CustomBox.style'
import Image from 'next/image';
import { Grid } from '@mui/material';
import { CreateTaskBtn } from '@/style/CustomDialogBox.jsx';
import Link from 'next/link'

function NotaskFoud({
    handleClickOpen,
    avatar,
    headerText,
    subHeaderText,
    cta,
    path

}) {
    return (
        <CustomBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
          //  border="2px solid yellow"
            height="100%"
        >
            <CustomBox
                className='not-found'
                borderRadius="50%"
                overflow="hidden"
            >
                <Image src={avatar} alt="demo" quality={95} width={190} height={190} className='img' />
            </CustomBox>
            <Grid
                container
                justifyContent={"center"}
            >
                <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 12, xl: 12 }}
                //border={"2px solid red"}
                >
                    <CustomBox as="section"
                        display="flex"
                        justifyContent="center"
                    >
                        <h2 className='not-found-header-typography'>
                            {headerText}
                        </h2>
                    </CustomBox>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 8 }} >
                    <CustomBox as="section"
                        textAlign="center"
                        marginTop="1rem"

                    >
                        <h2 className='not-found-subHeader-typography'>
                            {subHeaderText}
                        </h2>

                    </CustomBox>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 8, xl: 8 }} >
                    <CustomBox as="section"
                        fontSize='sm'
                        textAlign="center"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        marginTop="1rem"
                        columnGap="1rem"
                    >
                        <h2 className='not-found-subHeader-typography'>
                            {cta}
                        </h2>
                        {
                            path == "/completed-task" ?
                                // <CreateTaskBtn className='create-task-btn'
                                //     borderRadius="0.2rem"
                                // >
                                //     {/* <Link > */}
                                //    Go to Actice Task
                                //     {/* </Link> */}
                                // </CreateTaskBtn>
                                ""
                                :
                                <CreateTaskBtn className='create-task-btn'
                                    borderRadius="0.2rem"
                                    onClick={handleClickOpen}
                                >
                                    Create task
                                </CreateTaskBtn>

                        }
                    </CustomBox>
                </Grid>
            </Grid>


        </CustomBox>
    )
}

export default NotaskFoud