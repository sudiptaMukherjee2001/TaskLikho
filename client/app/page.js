import Image from "next/image";
import Grid from '@mui/material/Grid';
import LeftsideBar from "@/component/leftsideBar";

export default function Home() {
  return (
   <>
  <Grid
        container
        //  alignItems={'center'}
        // justifyContent={'center'}
      //  border={'1px solid orange'}
       minHeight={100}


      >
        {/* Left side bar start*/}
        <Grid
          item
          size={{ md: 3, lg: 3,xl:2 }}
          className='leftSidebar'
        //  sx={{ border: '2px solid yellow' }}
        >
          <LeftsideBar/>
         
        </Grid>
        {/* Left side bar end*/}

       

      </Grid>
   </>
  );
}
