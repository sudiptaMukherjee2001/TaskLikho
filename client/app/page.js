import Image from "next/image";
import Grid from '@mui/material/Grid';
import LeftsideBar from "@/component/leftsideBar";
import TaskTimelineHeader from "@/component/taskTimelineHeader";
import AllTask from "@/component/allTask";
import CustomBox from "../style/CustomBox.style";
import { StyledRightsideContentGrid } from "../style/StyledRightsideContentGrid.style";

export default function Home() {
  return (
    <>   
          <TaskTimelineHeader />
          {/* container for all task start */}
           <CustomBox
          >
          <AllTask/>
          
          </CustomBox>
          {/* container for all task end */}

    </>
  );
}
