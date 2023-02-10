export interface REFERRAL_LIST {
  serial_number: number;
  candidate_name: string;
  experience: any;
  department: string;
  position: string;
  date_of_referral: any;
  candidate_status: string;
  resume : any
}

export interface SHIFT {
  date_of_joining: any;
  office_shift: string
}


export interface Options {
  search?: boolean;
  searchPlaceholder?: string;
  showDropDown?:boolean;
  pagination?: boolean;
  dropdown1?:boolean
  dropdown1details:DropDownDetails
  ButtonDetails?: AddButtonDetails
}


export interface AddButtonDetails {
  route?: string;
  buttonName: string
  // isAddbuttonContainsQuery?: boolean
}
export interface DropDownDetails {

  buttonName: string
  // isAddbuttonContainsQuery?: boolean
}
