
'use client'
import { useEffect, useState } from 'react'
import TaskStatsPanel from '@/component/taskStatsPanel'
import { Grid } from '@mui/material'
import CompleteTaskCard from '@/component/taskCard'
import TaskStatsHeader from '@/component/taskStatsHeader'
import TaskinfoCard from '@/component/taskCard'
import { GetAllTaskReq } from '@/utils/GetallTaskReq.utli'
import CustomBox from '@/style/CustomBox.style'
import DayOverviewBox from '@/component/dayOverviewBox'
import { taskStatsTemplate } from '@/utils/SidebarItems.util.js'
import { usePathname } from 'next/navigation'
import NotaskFoud from '@/component/notaskFoud'

 function CompltedTask() {
    const [allTaskRes, setAllTaskRes] = useState([]);
     const pathname = usePathname();
    console.log("path",typeof pathname);
    
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

  // Filter completed tasks
  const completedCard = allTaskRes?.filter((item) => {
    return item?.tasks?.some(task => task?.isCompleted === true);
  })
  console.log("completedCard", completedCard);

  const totalCompletedTaskCount = completedCard?.reduce((acc, item) => {
    return acc + item.tasks.filter(task => task?.isCompleted === true).length;
  }, 0);
  console.log("totalCompletedTaskCount", totalCompletedTaskCount);

  //activeDays=> Number of days you completed at least one task
  const activeDays = completedCard?.length || 0;
  console.log("Active days", activeDays);

  // avgCompletedTaskCount=> Your average number of completed tasks per active day.
  const avgCompletedTaskCount = Math.round(totalCompletedTaskCount / activeDays) || 0;
  console.log("Average completed task count", avgCompletedTaskCount);

  // bestDay=> The highest number of tasks completed in a single day
  const bestDay =completedCard && completedCard.length > 0
  ? Math.max(...completedCard.map(item =>
      item.tasks.filter(task => task?.isCompleted).length
    ))
  : 0;

  console.log("Best day", bestDay);

  // final panelData
  const taskStatsData = taskStatsTemplate.map(stat => {
    switch (stat.key) {
      case "totalCompleted":
        return { ...stat, number: totalCompletedTaskCount };
      case "activeDays":
        return { ...stat, number: activeDays };
      case "avgPerDay":
        return { ...stat, number: avgCompletedTaskCount };
      case "bestDay":
        return { ...stat, number: bestDay };
      default:
        return { ...stat, number: 0 };
    }
  });




  return (
    <CustomBox>
      <TaskStatsHeader
        headerTypography="completed-task-timeline-header-typography"
        subHeaderTypography="completed-task-timeline-sub-header-typography"
        headerText="Completed Tasks"
        subHeaderText={`${totalCompletedTaskCount} task has completed`}
      />
      <TaskStatsPanel stats={taskStatsData} />
      <CustomBox
      height={completedCard?.length === 0 ? "74vh" : "none"}
      >
        {
          (completedCard?.length===0)?
           <NotaskFoud
            avatar="/notCompletedTask.jpg"
            headerText="Haven’t marked any tasks as done yet! ✍️✅"
            subHeaderText="Every completed task is a step forward. Start small, win big"
            path={pathname}
          />
          :
     
      completedCard?.map((completedTask, index) => {
        const completedTasksCountPerDate = completedTask.tasks.filter(task => task.isCompleted === true);
        return (
          <CustomBox
            as="section"
            marginBottom="2rem"
            key={index}
          >
            {/* DUE DATE OVERVIEW BOX START */}
            <CustomBox
              as="section"
              className="day-overView-section"
              display="flex"
            // border="2px solid red"
            >
              <DayOverviewBox date={completedTask?.dueDate} taskCount={completedTasksCountPerDate.length} />
            </CustomBox>
            {/* DUE DATE OVERVIEW BOX END */}
            <Grid container spacing={3} >
              {
                completedTask?.tasks
                  ?.filter(taskInfo => taskInfo.isCompleted === true) // 🧹 Filter first
                  ?.map((taskInfo, taskIdx) => (
                    <Grid item key={taskIdx} size={{xs:12,sm:6, md:6, lg: 4, xl: 3 }}>
                      <TaskinfoCard
                        taskStatusText="Completed"
                        completdOn={completedTask.dueDate}
                        taskCard="completed-taskCard"
                        taskStatus="task-Completed"
                        taskName={taskInfo.taskName}
                        priority={taskInfo.priority}
                        taskId={taskInfo._id}
                      />
                    </Grid>
                  ))
              }
            </Grid>

          </CustomBox>
        )
      })
      
        }
      </CustomBox>

    </CustomBox>
  )
}

export default CompltedTask