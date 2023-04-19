import { Validators } from "@angular/forms";

export const REGEX = {
  email : '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  name:/^([a-zA-Z]+\s)*[a-zA-Z]+$/,
  number : "^[0-9]+$",
  password :/^(\s+\S+\s*)*(?!\s).*$/,
  space:'^/^[?!\S][a-zA-Z\s]+$/$',
  // onlySpace : '^(?!\s).*$'

}


export const EMAIL_VALIDATION = Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
export const COMMON_VALIDATION = Validators.required
export const MIN_LENGTH = Validators.minLength(6)
export const USERNAME_MAX_LENGTH = Validators.maxLength(18)
// export const NAME_PATTERN = Validators.pattern("[A-Za-z]{1,32}")
export const CONTACT_MAX_LENGTH = Validators.maxLength(10)
export const CONTACT_NUMBER = Validators.pattern("^[0-9]+$")
export const PASSWORD_VALIDATION = Validators.pattern('/^(\s+\S+\s*)*(?!\s).*$/')
export const NAME_PATTERN = Validators.pattern(REGEX.name)
// export const SPACE = Validators.pattern(REGEX.onlySpace)





