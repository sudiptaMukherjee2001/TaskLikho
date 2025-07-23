'use client'
import { useEffect, useState } from "react";
import TaskTimelineHeader from "@/component/taskTimelineHeader";
import AllTask from "@/component/allTask";
import CustomBox from "../style/CustomBox.style";
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli.js';
import NotaskFoud from "@/component/notaskFoud";
import DialogForm from "@/component/dialogForm.jsx";


export default  function Home() {
    const [allTaskRes, setAllTaskRes] = useState();
   const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
// ✅ Fetch once on initial page load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await GetAllTaskReq();
        console.log("All tasks response:", res);
        setAllTaskRes(res?.data || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);
  
      console.log("all task Res==>",allTaskRes);
      const inProgressCard = allTaskRes?.filter((item) => {
        return item.tasks.some(task => task.isCompleted === false);
    })
    console.log("inProgressCard", inProgressCard);
      
  return (
    <>   
          <TaskTimelineHeader 
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          />
          {/* container for all task start */}
           <CustomBox
          //  border="2px solid pink"
          height={inProgressCard?.length===0?"74vh":"none"}
          >
            {
              (inProgressCard?.length===0)?
                <NotaskFoud
                 handleClickOpen={handleClickOpen}
                 avatar="/CompletedTask.jpg"
                 headerText="You've completed all your tasks! 😌✨"
                 subHeaderText="Take a moment to relax — you've earned it. Consistency creates clarity. Rest today, rise stronger tomorrow."
                 cta="Ready for your next mission? Click on"
                /> : <AllTask inProgressCard={inProgressCard}/>
             
            }
          
          </CustomBox>
          {/* container for all task end */}
  {/* Dialog Controlled Here */}
      <DialogForm open={open} handleClose={handleClose} />
    </>
  );
}
