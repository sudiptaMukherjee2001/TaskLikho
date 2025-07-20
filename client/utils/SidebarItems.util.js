//import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const sidebarIcon = [
  { name: "Active Tasks", icon: '✅',link:'/'},
  { name: "Completed", icon: '✅',link:'/completed-task'},
  { name: "Pending", icon: '✅', link:'/pending-task'},
  { name: "Analytics", icon: '✅', isActive: false, link:'#'},
];
export const taskStatsTemplate = [
  { name: "Total Completed", key: "totalCompleted", icon: <CalendarMonthIcon /> },
  { name: "Active Days", key: "activeDays", icon: <CalendarMonthIcon /> },
  { name: "Avg Per Day", key: "avgPerDay", icon: <CalendarMonthIcon /> },
  { name: "Best Day", key: "bestDay", icon: <CalendarMonthIcon /> },
];