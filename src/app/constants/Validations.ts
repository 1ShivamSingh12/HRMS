import { Validators } from "@angular/forms";

export const EMAIL_VALIDATION = Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
export const COMMON_VALIDATION = Validators.required
export const MIN_LENGTH = Validators.minLength(6)
export const USERNAME_MAX_LENGTH = Validators.maxLength(10)
// export const PATTERN_SPACE= Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)
export const NAME_PATTERN = Validators.pattern('/(.|\s)*\S(.|\s)*/')


export const REGEX = {
  email : '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  name :'/(.|\s)*\S(.|\s)*/',
  password :/^(\s+\S+\s*)*(?!\s).*$/
}
