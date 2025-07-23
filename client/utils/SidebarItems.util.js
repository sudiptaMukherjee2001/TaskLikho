//import AddTaskIcon from '@mui/icons-material/AddTask';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const sidebarIcon = [
  { name: "Active Tasks", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-todo group-hover:scale-110 transition-transform duration-300 tempo-7058f7de-8469-5169-9bde-dc4506cddc32" tempoelementid="tempo-7058f7de-8469-5169-9bde-dc4506cddc32"><rect x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>),link:'/'},
  { name: "Completed", icon:  (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big group-hover:scale-110 transition-transform duration-300 tempo-7d7f8be8-bf6b-5bb3-900e-90e4c3de2dd6" tempoelementid="tempo-7d7f8be8-bf6b-5bb3-900e-90e4c3de2dd6"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>),link:'/completed-task'},
  { name: "Pending", icon:  (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock group-hover:scale-110 transition-transform duration-300 tempo-3625c76a-aa0e-50ea-b4ef-502b61213960" tempoelementid="tempo-3625c76a-aa0e-50ea-b4ef-502b61213960"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>), link:'/pending-task'},
  { name: "Analytics", icon:  (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart3 group-hover:scale-110 transition-transform duration-300 tempo-bf589764-2ece-5266-8964-ee70cb7b9199" tempoelementid="tempo-bf589764-2ece-5266-8964-ee70cb7b9199"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>), link:'#'},
];
export const taskStatsTemplate = [
  { name: "Total Completed", key: "totalCompleted", icon: <CalendarMonthIcon /> },
  { name: "Active Days", key: "activeDays", icon: <CalendarMonthIcon /> },
  { name: "Avg Per Day", key: "avgPerDay", icon: <CalendarMonthIcon /> },
  { name: "Best Day", key: "bestDay", icon: <CalendarMonthIcon /> },
];