import { Validators } from "@angular/forms";

export const EMAIL_VALIDATION = Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
export const COMMON_VALIDATION = Validators.required
export const MIN_LENGTH = Validators.minLength(6)
export const USERNAME_MAX_LENGTH = Validators.maxLength(10)
export const PATTERN_SPACE= Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)
export const NAME_PATTERN= Validators.pattern('^[a-zA-Z0-9_@-]{2,25}$')

// export const PHONE_VALIDATION = Validators.pattern("^[7][9][0-9]{7}$")
// export const PASSWORD_REGEX = Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$")


export const REGEX = {
  email : '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  name :/^[A-Za-z0-9]*$/,
  password :/^(\s+\S+\s*)*(?!\s).*$/
}
