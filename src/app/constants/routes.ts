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

export const DOCUMENTS : Route = {
  path:'policy-document',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  }
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

export const REFERRAL_LIST : Route = {
  path:'referral-list',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_INTERVIEW : Route = {
  path:'my-interview',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const ASSETS_INVENTORY : Route = {
  path:'assets',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const REQUEST_ASSET : Route = {
  path:'request-asset',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const ASSET_DECLARATION : Route = {
  path:'asset-declaration',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const UPCOMING_TRAINING : Route = {
  path:'upcoming_trainings',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const ONGOING_TRAINING : Route = {
  path:'ongoing_trainings',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}
export const MY_TRAINING : Route = {
  path:'my_trainings',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  }
}
export const REQUESTED_TRAINING : Route = {
  path:'requested-trainings',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  }
}
export const JOB_DETAILS : Route = {
  path:'job-details',
  get fullurl(): string {
    return `${JOB_OPENING.fullurl}/${this.path}`;
  }
}

export const ADD_PITCH : Route = {
  path:'add-pitch',
  get fullurl(): string {
    return `${ENTREPRENEURSHIP.fullurl}/${this.path}`;
  }
}

export const FRESHER_TRAINING : Route = {
  path:'fresher-training',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  }
}

export const VIEW_DETAILS : Route = {
  path:'trainings-details',
  get fullurl(): string {
    return `/${FRESHER_TRAINING.fullurl}/${this.path}`;
  }
}
