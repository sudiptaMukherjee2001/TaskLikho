//import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const sidebarIcon = [
  { name: "Active Tasks", icon: '✅', isActive: true },
  { name: "Completed", icon: '✅', isActive: false },
  { name: "Pending", icon: '✅', isActive: false },
  { name: "Analytics", icon: '✅', isActive: false },
];
export const taskStatsPanel = [
  {name:"Total Completed", number: "18", icon:<CalendarMonthIcon/>  },
  {name:"Active Days", number: "4", icon:<CalendarMonthIcon/>  },
  {name:"Avg Per Day", number: "4", icon:<CalendarMonthIcon/>  },
  {name:"Best Day", number: "8", icon:<CalendarMonthIcon/>  },
];