//import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const sidebarIcon = [
  { name: "Active Tasks", icon: '✅',link:'/'},
  { name: "Completed", icon: '✅',link:'/completed-task'},
  { name: "Pending", icon: '✅', link:'/pending-task'},
  { name: "Analytics", icon: '✅', isActive: false, link:'#'},
];
export const taskStatsPanel = [
  {name:"Total Completed", number: "18", icon:<CalendarMonthIcon/>  },
  {name:"Active Days", number: "4", icon:<CalendarMonthIcon/>  },
  {name:"Avg Per Day", number: "4", icon:<CalendarMonthIcon/>  },
  {name:"Best Day", number: "8", icon:<CalendarMonthIcon/>  },
];