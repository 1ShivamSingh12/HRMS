import {
  ASSET_DECLARATION,
  ATTENDANCE_CALENDER,
  AUTH,
  DIRECTORY,
  DOCUMENTS,
  ENTREPRENEURSHIP,
  FLOATING_LEAVE,
  HOLIDAY_CALENDER,
  HOME,
  JOB_OPENING,
  LUNCH_COUPON,
  MANUAL_PUNCH,
  MY_ASSETS,
  MY_DSR,
  MY_INTERVIEW,
  MY_LEAVE,
  MY_PERFORMANCE,
  MY_PROFILE,
  MY_TRAINING,
  MY_TRAININGS,
  ONGOING_TRAINING,
  PROJECTS,
  PUNCH_LOG,
  REFERRAL_LIST,
  REQUESTED_TRAINING,
  REQUEST_ASSET,
  REQUEST_DINNER,
  TICKET,
  UPCOMING_TRAINING,
} from './routes';

export const sideNavList = [
  { title: 'Home', logo: 'home', link: HOME.path, isActive: true },
  {
    title: 'My Profile',
    logo: 'person',
    link: MY_PROFILE.path,
    isActive: true,
  },
  {
    title: 'Directory',
    logo: 'description',
    link: DIRECTORY.path,
    isActive: true,
  },
  {
    title: 'Food',
    logo: 'restaurant',
    show: false,
    options: [
      { subTitle: 'Lunch Coupon', link: LUNCH_COUPON.fullurl, subLogo: 'lunch_dining' },
      { subTitle: 'Request Dinner', link: REQUEST_DINNER.fullurl, subLogo: 'dinner_dining' },
    ],
    isActive: true,
  },

  {
    title: 'Entrepreneurship Program',
    logo: 'person',
    show: false,
    options: [
      { subTitle: 'Explore', link: ENTREPRENEURSHIP.path, subLogo: '' },
    ],
    isActive: true,
  },
  {
    title: 'My Links',
    logo: 'view_in_ar',
    show: false,
    options: [
      { subTitle: 'Insurance Verification Details', subLogo: 'checklist' },
      {
        subTitle: 'Holiday Calender ',
        subLogo: 'event',
        link: HOLIDAY_CALENDER.fullurl,
      },
      {
        subTitle: 'Policy Documents',
        subLogo: 'event',
        link: DOCUMENTS.fullurl,
      },
    ],
    isActive: true,
  },
  {
    title: 'Finance',
    logo: 'payments',

    options: [
      { subTitle: 'Salary Slip', link: '' },
      { subTitle: 'Form 16', link: '' },
      { subTitle: 'Investment Declaration', link: '' },
    ],
    isActive: true,
  },
  {
    title: 'Reviews',
    logo: 'grid_view',
    options: [
      {
        subTitle: 'My Performance',
        link: MY_PERFORMANCE.fullurl,
        subLogo: 'event',
      },
    ],
    isActive: true,
  },
  {
    title: 'Refer a Friend',
    logo: 'groups',
    options: [
      { subTitle: 'Job Openings', subLogo: '', link: JOB_OPENING.fullurl },
      { subTitle: ' Referral List', subLogo: '', link: REFERRAL_LIST.fullurl },
    ],
    isActive: true,
  },
  {
    title: 'Recruitment',
    logo: 'newspaper',
    options: [{ subTitle: 'My Interview', link: MY_INTERVIEW.fullurl }],
    isActive: true,
  },
  {
    title: 'Freshers Training',
    logo: 'school',
    options: [
      { subTitle: 'My Trainings', link: MY_TRAINING.fullurl, subLogo: 'event' },
    ],
    isActive: true,
  },
  {
    title: 'Training',
    logo: 'school',
    options: [
      {
        subTitle: 'Upcoming Trainings',
        link: UPCOMING_TRAINING.fullurl,
        subLogo: '',
      },
      {
        subTitle: 'Ongoing Trainings',
        link: ONGOING_TRAINING.fullurl,
        subLogo: '',
      },
      { subTitle: 'My Trainings', link: MY_TRAININGS.fullurl, subLogo: '' },
      {
        subTitle: 'Requested Training',
        link: REQUESTED_TRAINING.fullurl,
        subLogo: '',
      },
    ],
    isActive: true,
  },
  {
    title: 'Assests Inventory',
    logo: 'science',
    options: [
      {
        subTitle: 'My Assets inventory',
        link: MY_ASSETS.fullurl,
        subLogo: 'event',
      },
      {
        subTitle: 'Request Asset',
        link: REQUEST_ASSET.fullurl,
        subLogo: 'event',
      },
      {
        subTitle: 'Assets Declaration',
        link: ASSET_DECLARATION.fullurl,
        subLogo: 'event',
      },
    ],
    isActive: true,
  },
  {
    title: 'Attendance',
    logo: 'schedule',
    options: [
      { subTitle: 'Attendance Calender', link: ATTENDANCE_CALENDER.fullurl },
      { subTitle: 'Manual Punch', link: MANUAL_PUNCH.fullurl },
      { subTitle: 'Punch Log', link: PUNCH_LOG.fullurl },
    ],
    isActive: true,
  },
  {
    title: 'Leave',
    logo: 'calendar_today',
    options: [
      { subTitle: 'My Leave', link: MY_LEAVE.fullurl },
      { subTitle: 'Floating Leave', link: FLOATING_LEAVE.fullurl },
    ],
    isActive: true,
  },
  {
    title: 'Tickets',
    logo: 'view_day',
    options: [{ subTitle: 'Ticket', link: TICKET.fullurl }],
    isActive: true,
  },
  {
    title: 'DSR',
    logo: 'calendar_today',
    options: [{ subTitle: 'My DSR', link: MY_DSR.fullurl }],
    isActive: true,
  },
  {
    title: 'Projects',
    logo: 'view_day',
    isActive: true,
    link: PROJECTS.fullurl,
  },
  { title: 'Expense', logo: 'monetization_on', isActive: false },
  { title: 'Announcements', logo: 'campaign', isActive: false },
  { title: 'Travels', logo: 'flight', isActive: false },
  { title: 'Logout', logo: 'logout', isActive: true, link: AUTH.fullurl },
];
