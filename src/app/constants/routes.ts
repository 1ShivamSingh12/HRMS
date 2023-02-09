import { Route } from "../interfaces/route.interface";

export const AUTH : Route = {
  path:'auth',
  get fullurl(): string {
    return `/${this.path}`;
  },
}
export const FORGET_PASSWORD : Route = {
  path:'forget-password',
  get fullurl(): string {
    return `${AUTH.fullurl}/${this.path}`;
  },
}

export const DASHBOARD : Route = {
  path:'dashboard',
  get fullurl(): string {
    return `/${this.path}`;
  },
}

export const LOGIN : Route = {
  path:'login',
  get fullurl(): string {
    return `/${this.path}`;
  },
}


export const HOME : Route = {
  path:'home',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_PROFILE : Route = {
  path:'my-profile',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}

export const DIRECTORY : Route = {
  path:'directory',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}

export const ENTREPRENEURSHIP : Route = {
  path:'entrepreneurship',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}

export const HOLIDAY_CALENDER : Route = {
  path:'holiday-calender',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_PERFORMANCE : Route = {
  path:'my-performance',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const JOB_OPENING : Route = {
  path:'job-opening',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}
