import { Route } from "../interfaces/route.interface";

/* login routes*/
export const AUTH : Route = {
  path:'auth',
  get fullurl(): string {
    return `/${this.path}`;
  },
}
export const LOGIN : Route = {
  path:'login',
  get fullurl(): string {
    return `${AUTH.fullurl}/${this.path}`;
  },
}
export const FORGET_PASSWORD : Route = {
  path:'forget-password',
  get fullurl(): string {
    return `${AUTH.fullurl}/${this.path}`;
  },
}

/* dashboard routes*/

export const DASHBOARD : Route = {
  path:'dashboard',
  get fullurl(): string {
    return `/${this.path}`;
  },
}
/* home routes*/

export const HOME : Route = {
  path:'home',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}


export const JOB_DETAILS : Route = {
  path:'job-details',
  get fullurl(): string {
    return `${JOB_OPENING.fullurl}/${this.path}`;
  }
}


/* my-profile routes*/

export const MY_PROFILE : Route = {
  path:'my-profile',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const BASIC_INFORMATION : Route = {
  path:'basic-information',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}

export const PROFILE_PICTURE : Route = {
  path:'profile-picture',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}

export const QUALIFICATION : Route = {
  path:'qualification',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}

export const SHIFT : Route = {
  path:'shift',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}

export const CHANGE_PASSWORD : Route = {
  path:'change-password',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}

export const APPRAISAL : Route = {
  path:'appraisal',
  get fullurl(): string {
    return `${MY_PROFILE.fullurl}/${this.path}`;
  }
}


/* directory routes*/

export const DIRECTORY : Route = {
  path:'directory',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}


/* food */

export const FOOD : Route = {
  path:'food',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}

export const LUNCH_COUPON : Route = {
  path:'lunch-coupon',
  get fullurl(): string {
    return `${FOOD.fullurl}/${this.path}`;
  },

}

export const PURCHASE_COUPON : Route = {
  path:'purchase-coupon',
  get fullurl(): string {
    return `${LUNCH_COUPON.fullurl}/${this.path}`;
  },
}


export const REQUEST_DINNER : Route = {
  path:'request-dinner',
  get fullurl(): string {
    return `${FOOD.fullurl}/${this.path}`;
  },

}
/* entrepreneurship routes*/

export const ENTREPRENEURSHIP : Route = {
  path:'entrepreneurship',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },

}

export const ADD_PITCH : Route = {
  path:'add-pitch',
  get fullurl(): string {
    return `${ENTREPRENEURSHIP.fullurl}/${this.path}`;
  }
}


export const MY_PITCH : Route = {
  path:'my-pitch',
  get fullurl(): string {
    return `${ENTREPRENEURSHIP.fullurl}/${this.path}`;
  }
}
/* my-links routes*/

export const MY_LINKS : Route = {
  path:'my-links',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const HOLIDAY_CALENDER : Route = {
  path:'holiday-calender',
  get fullurl(): string {
    return `${MY_LINKS.fullurl}/${this.path}`;
  },
}

export const DOCUMENTS : Route = {
  path:'policy-document',
  get fullurl(): string {
    return `${MY_LINKS.fullurl}/${this.path}`;
  },
}

/* finance routes*/


/* reviews routes*/


export const REVIEWS : Route = {
  path:'reviews',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_PERFORMANCE : Route = {
  path:'my-performance',
  get fullurl(): string {
    return `${REVIEWS.fullurl}/${this.path}`;
  },
}

/* refer-a-friend routes*/

export const REFER_A_FRIEND : Route = {
  path:'refer-a-friend',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}


export const JOB_OPENING : Route = {
  path:'job-opening',
  get fullurl(): string {
    return `${REFER_A_FRIEND.fullurl}/${this.path}`;
  },
}

export const REFERRAL_LIST : Route = {
  path:'referral-list',
  get fullurl(): string {
    return `${REFER_A_FRIEND.fullurl}/${this.path}`;
  },
}



/* recruitnment routes*/


export const RECRUITMENT : Route = {
  path:'recruitment',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_INTERVIEW : Route = {
  path:'my-interview',
  get fullurl(): string {
    return `${RECRUITMENT.fullurl}/${this.path}`;
  },
}

/* fresher routes*/


export const FRESHER_TRAINING : Route = {
  path:'fresher-training',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  }
}


export const MY_TRAINING : Route = {
  path:'my_trainings',
  get fullurl(): string {
    return `${FRESHER_TRAINING.fullurl}/${this.path}`;
  }
}

export const VIEW_DETAILS : Route = {
  path:'trainings-details',
  get fullurl(): string {
    return `${MY_TRAINING.fullurl}/${this.path}`;
  }
}


/* training routes*/

export const TRAINING : Route = {
  path:'training',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const UPCOMING_TRAINING : Route = {
  path:'upcoming_trainings',
  get fullurl(): string {
    return `${TRAINING.fullurl}/${this.path}`;
  },
}

export const VIEW_DETAILS_UPCOMING_TRAINING : Route = {
  path:'view-detail',
  get fullurl(): string {
    return `${UPCOMING_TRAINING.fullurl}/${this.path}`;
  },
}


export const ONGOING_TRAINING : Route = {
  path:'ongoing_trainings',
  get fullurl(): string {
    return `${TRAINING.fullurl}/${this.path}`;
  },

}

export const MY_TRAININGS : Route = {
  path:'my-trainings',
  get fullurl(): string {
    return `${TRAINING.fullurl}/${this.path}`;
  }
}

export const REQUESTED_TRAINING : Route = {
  path:'requested-trainings',
  get fullurl(): string {
    return `${TRAINING.fullurl}/${this.path}`;
  }
}

/* assests routes*/

export const ASSETS_INVENTORY : Route = {
  path:'assets-inventory',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_ASSETS : Route = {
  path:'my-assets',
  get fullurl(): string {
    return `${ASSETS_INVENTORY.fullurl}/${this.path}`;
  },
}

export const REQUEST_ASSET : Route = {
  path:'request-asset',
  get fullurl(): string {
    return `${ASSETS_INVENTORY.fullurl}/${this.path}`;
  },
}
export const ASSET_DECLARATION : Route = {
  path:'asset-declaration',
  get fullurl(): string {
    return `${ASSETS_INVENTORY.fullurl}/${this.path}`;
  },
}

/*attendance*/

export const ATTENDANCE : Route = {
  path:'attendance',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const ATTENDANCE_CALENDER : Route = {
  path:'attendance-calender',
  get fullurl(): string {
    return `${ATTENDANCE.fullurl}/${this.path}`;
  },
}

export const MANUAL_PUNCH : Route = {
  path:'manual-punch',
  get fullurl(): string {
    return `${ATTENDANCE.fullurl}/${this.path}`;
  },
}

export const PUNCH_LOG : Route = {
  path:'punch-log',
  get fullurl(): string {
    return `${ATTENDANCE.fullurl}/${this.path}`;
  },
}


/* Leave */


export const LEAVE : Route = {
  path:'leave',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_LEAVE : Route = {
  path:'my-leave',
  get fullurl(): string {
    return `${LEAVE.fullurl}/${this.path}`;
  },
}

export const MY_LEAVE_DETAILS : Route = {
  path:'myLeave-details',
  get fullurl(): string {
    return `${MY_LEAVE.fullurl}/${this.path}`;
  },
}



export const FLOATING_LEAVE : Route = {
  path:'floating-leave',
  get fullurl(): string {
    return `${LEAVE.fullurl}/${this.path}`;
  },
}

/* TICKET */

export const TICKETS : Route = {
  path:'tickets',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const TICKET : Route = {
  path:'ticket',
  get fullurl(): string {
    return `${TICKETS.fullurl}/${this.path}`;
  },
}


/* dsr */

export const DSR : Route = {
  path:'dsr',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const MY_DSR : Route = {
  path:'my-dsr',
  get fullurl(): string {
    return `${DSR.fullurl}/${this.path}`;
  },
}

export const MY_DSR_DETAIL : Route = {
  path:'my-dsr-detail',
  get fullurl(): string {
    return `${MY_DSR.fullurl}/${this.path}`;
  },
}

export const DSR_EDIT : Route = {
  path:'dsr-edit',
  get fullurl(): string {
    return `${MY_DSR.fullurl}/${this.path}`;
  },
}

/* PROJECTS */
export const PROJECTS : Route = {
  path:'projects',
  get fullurl(): string {
    return `${DASHBOARD.fullurl}/${this.path}`;
  },
}

export const PROJECT_DETAIL : Route = {
  path:'project-details',
  get fullurl(): string {
    return `${PROJECTS.fullurl}/${this.path}`;
  },
}
