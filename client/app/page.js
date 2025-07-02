import Image from "next/image";
import Grid from '@mui/material/Grid';
import LeftsideBar from "@/component/leftsideBar";
import TaskTimelineHeader from "@/component/taskTimelineHeader";
import AllTask from "@/component/allTask";
import CustomBox from "./style/CustomBox.style";
import { StyledRightsideContentGrid } from "./style/StyledRightsideContentGrid.style";

export default function Home() {
  return (
    <>
      <Grid
        container
        //  alignItems={'center'}
        // justifyContent={'center'}
         border={'1px solid orange'}
         height={"100vh"}
        
       
      >
        {/* Left side bar start*/}
        <Grid
          item
          size={{ md: 3, lg: 3, xl: 2 }}
          className='leftSidebar'
        //  sx={{ border: '2px solid yellow' }}
        >
          <LeftsideBar />

        </Grid>
        {/* Left side bar end*/}
        {/* Right side content start */}
        <StyledRightsideContentGrid
          item
          size={{ md: 3, lg: 9, xl: 10 }}
         
        >
          <TaskTimelineHeader />
          {/* container for all task start */}
           <CustomBox
            border="2px solid red"
            maxHeight="100vh"
            minHeight="100vh"
            overflow="auto"
           
          >

          <AllTask/>
          </CustomBox>
          {/* container for all task end */}

        </StyledRightsideContentGrid>
        {/* Left side bar end*/}



      </Grid>
    </>
  );
}
