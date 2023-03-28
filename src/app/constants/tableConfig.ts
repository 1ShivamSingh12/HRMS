
export interface Options {
  show:any
  search?: boolean;
  filter?: any;
  showFilter?: any;
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

export const ASSETS_DECLARATION_CONFIG: Options = {
  show:true,
  search: true,
  showFilter:true,
  searchPlaceholder: "Search..",
  pagination: true,
  addButton: false,
};
export const ASSETS_CONFIG: Options = {
  search: true,
  show:true,
  showFilter:true,
  searchPlaceholder: "Search by asset name, category",
  pagination: true,
  addButton: false,
};
export const REQUEST_ASSETS_CONFIG: Options = {
  search: true,
  show:true,
  showFilter: true,
  searchPlaceholder: 'Search..',
  pagination: true,
  addButton: false,
};
export const MY_LEVAE_CONFIG: Options = {
  search: true,
  showFilter:true,
  show:true,
  searchPlaceholder: "Search..",
  pagination: true,
  addButton: false,
};

export const QUALIFICATION_DECLARATION_CONFIG: Options = {
  search: true,
  show:true,
  showFilter: true,
  searchPlaceholder: '',
  pagination: true,
  addButton: false,
};

export const MY_INTERVIEW_CONFIQ: Options = {
  search: true,
  show:true,
  showFilter:true,
  searchPlaceholder: "Search...",
  pagination: true,
  addButton: false,

};

export const REQUESTED_TRANING_DECLARATION: Options = {
  search: false,
  showFilter:true,
  show:false,
  searchPlaceholder: "Search..",
};

export const TICKET_CONFIG: Options = {
  search: true,
  showFilter:true,
  show:true,
  searchPlaceholder: "Search..",
};

export const DSR_CONFIG: Options = {
  search: true,
  showFilter:true,
  show:true,
  searchPlaceholder: "Search..",
};

export const PROJECTS_CONFIG: Options = {
  search: false,
  showFilter:false,
  show:false,
  searchPlaceholder: "Search..",
};
