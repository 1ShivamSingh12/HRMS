import { DASHBOARD, DIRECTORY, ENTREPRENEURSHIP, FORGET_PASSWORD, HOLIDAY_CALENDER, HOME, JOB_OPENING, LOGIN, MY_PERFORMANCE, MY_PROFILE, REFERRAL_LIST } from "./routes";

export const sideNavList = [
  { title: 'Home', logo: 'home',link : HOME.path, isActive: true, },
  { title: 'My Profile', logo: 'person',link : MY_PROFILE.path, isActive: true, },
  { title: 'Directory', logo: 'description',link : DIRECTORY.path, isActive: true, },
  { title: 'Entrepreneurship Program', logo: 'person',show : false, options: [{ subTitle: 'Explore', link : ENTREPRENEURSHIP.path, subLogo: 'horizontal_rule'}], isActive: true, },
  { title: 'My Links', logo: 'grid_view',show : false, options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist'},{ subTitle: 'Holiday Calender ', subLogo: 'event',link:HOLIDAY_CALENDER.path}], isActive: true, },
  { title: 'Finance', logo: 'payments', options: [], isActive: true, },
  { title: 'Reviews', logo: 'grid_view',  options: [{ subTitle: 'My Performance', link : MY_PERFORMANCE.path, subLogo: 'event'}], isActive: true, },
  { title: 'Refer a Friend', logo: 'groups', options: [{ subTitle: 'Job Openings', subLogo: '',link:JOB_OPENING.path},{ subTitle: ' Referral List', subLogo: '',link:REFERRAL_LIST.path}], isActive: true, },
  { title: 'Freshers Training', logo: 'school', options: [], isActive: true, },
  { title: 'Training', logo: 'school', options: [], isActive: true, },
  { title: 'Assests Inventory', logo: 'science', options: [], isActive: true, },
  { title: 'Attendance', logo: 'schedule', options: [], isActive: true, },
  { title: 'Leave', logo: 'calendar_today', options: [], isActive: true, },
  { title: 'Tickets', logo: 'view_day', options: [], isActive: true, },
  { title: 'DSR', logo: 'calendar_today', options: [], isActive: true, },
  { title: 'Projects', logo: 'view_day', isActive: true, },
  { title: 'Expense', logo: 'monetization_on', isActive: false, },
  { title: 'Announcements', logo: 'campaign', isActive: false, },
  { title: 'Travels', logo: 'flight', isActive: false, },
  { title: 'Logout', logo: 'logout', isActive: true, },
]
