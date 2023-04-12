export interface REFERRAL_LIST {
  serial_number: number;
  candidate_name: string;
  experience: any;
  department: string;
  position: string;
  date_of_referral: any;
  candidate_status: string;
  resume: any;
}

export interface POLICY {
  serial_number: any;
  name: any;
  type: string;
  file_size: string;
  last_modified: any;
  action: any;
}

export interface MY_INTERVIEW {
  serial_number: any;
  department: string;
  name: any;
  email: string;
  mobileNo: string;
  round_type: any;
  interview_date: string;
  interview_time: any;
  final_status: any;
  action: any;
}

export interface ASSETS {
  assets_name: any;
  assets_category: string;
  company_asset_code: any;
  brand: string;
  serial_no: string;
  model: any;
  is_working: string;
  company: any;
}

export interface MY_LEAVE {
  action: any;
  leave_type: string;
  request_from: any;
  request_to: string;
  applied_on: string;
  status: any;
  level1: string;
  level2: any;
}


export interface FLOATING_LEAVE {
  s_no: any;
  event_name: string;
  date: any;
}


export interface REQUEST_ASSETS {
  serial_no: any;
  status: any;
  request_reason: string;
  priority: any;
  requested_at: string;
  assets_category: any;
  allocation_type: string;
  company: any;
}

export interface ASSETS_DECLARATION {
  s_no: any;
  employee_Id: any;
  unique_asset_code: string;
  serial_number: any;
  model_number: string;
  os: any;
  os_version: string;
  brand: any;
  colour: any;
  images: string;
  is_Working: any;
  added: any;
}

export interface REQUESTED_TRAINING {
  serial_number: any;
  training_name: string;
  timeline_to_conduct: any;
  requested_date: string;
  status: string;
  action: any;
}

export interface QUALIFICATION {
  action: any;
  school: any;
  education_level: any;
  time_period: string;
}
  export interface SHIFT {
  date_of_joining: any;
  office_shift: string;
}

export interface TRAININGS_DETAILS {
  serial_number: any;
  topic: string;
  topic_trainer: any;
  trainer_email: string;
  start_date: string;
  end_date: any;
  resource_url: any;
}

export interface SUB_TOPICS {
  serial_number: any;
  sub_topic: string;
  topic: any;
  trainer: string;
  trainer_email: string;
  start_date: any;
  end_date: any;
  resource_url: any;
}

export interface MANUAL_PUNCH {
  edit: any;
  manual_punch_date: any;
  in_time: any;
  out_time: any;
}

export interface PUNCH_LOG {
  name: any;
  punch_time: any;
  direction: any;
}


export interface ATTENDENCE {
  serial_number: any;
  topic: any;
  date: any;
 attendence:any
}

export interface TICKET {
  action: any;
  ticket_code: any;
  priority: any;
  employee: string;
  subject: string;
  status: any;
  date: string;
}

export interface DSR {
  sr_no: any;
  emp_name: any;
  emp_id: any;
  email: string;
  employee_type: string;
  date: string;
  total: any;
  final_approval:any
}

export interface DSR_DETAIL {
  sr_no: any;
  project_name: any;
  dsr: any;
  status: string;
  pm_approval: string;
  am_approval: string;
  rm_approval: any;
  final_approval:any
  logged_hrs : any,
  action:any
}

export interface PROJECT {
  project_name: any;
  billing_type: any;
  resources: string;
  hrs: any;
  total_milestone: string;
  delivered: any;
  pending: string;
  complete: any;
}

export interface MY_PITCH {
  s_no: any;
  title: any;
  industry: string;
  type: any;
  submitted: string;
  action: any;
}

export interface PROJECT_LIST {
  name: any;
  allocated: any;
  department: string;
  allocate_hours: any;
  exp: string;
  relevant_exp: any;
  hrs_log: any;
}
