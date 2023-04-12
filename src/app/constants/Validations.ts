import { Validators } from "@angular/forms";

export const EMAIL_VALIDATION = Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
export const COMMON_VALIDATION = Validators.required
export const MIN_LENGTH = Validators.minLength(6)
export const USERNAME_MAX_LENGTH = Validators.maxLength(10)
export const NAME_PATTERN = Validators.pattern("[A-Za-z]{1,32}")
export const CONTACT_MAX_LENGTH = Validators.maxLength(10)
export const CONTACT_NUMBER = Validators.pattern("^[0-9]+$")
export const SPACES = Validators.pattern('/^[?!\S][a-zA-Z\s]+$/')
export const PASSWORD_VALIDATION = Validators.pattern('/^(\s+\S+\s*)*(?!\s).*$/')


export const REGEX = {
  email : '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  name :"[A-Za-z]{1,32}",
  number : "^[0-9]+$",
  password :/^(\s+\S+\s*)*(?!\s).*$/,
  space:'^/^[?!\S][a-zA-Z\s]+$/$'
}


