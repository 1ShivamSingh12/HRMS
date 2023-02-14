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
  time_period: string;
  education_level: any;
}
export interface SHIFT {
  date_of_joining: any;
  office_shift: string;
}

export interface Options {
  search?: boolean;
  filter?: any;
  show?: any;
  pagination?: boolean;
  searchPlaceholder?: string;
  addButton?: boolean;
  actionButton?: boolean;
  ButtonDetails?: AddButtonDetails;
  ActionButtonDetails?: AddButtonDetails;
}

export interface AddButtonDetails {
  route?: string;
  buttonName: string;
  // isAddbuttonContainsQuery?: boolean
}
export interface DropDownDetails {
  buttonName: string;
  // isAddbuttonContainsQuery?: boolean
}
