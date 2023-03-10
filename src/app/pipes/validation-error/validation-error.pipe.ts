import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REGEX } from 'src/app/constants/Validations';

@Pipe({
  name: 'validationError',
  pure : false
})
export class ValidationErrorPipe implements PipeTransform {

  transform(form: FormGroup, control : string , label : string): any {

    // if(form.get(control)?.touched || form.get(control)?.invalid){

    if(form.get(control)?.touched && form.get(control)?.invalid){
      console.log(form,control,label,'lll');

      const error = form.get(control)?.errors

      // console.log(error,'errr');

      if(error?.hasOwnProperty("required")){
        return `${label} is required`
      }
      else if(error?.hasOwnProperty("minlength")){
        return `${label} must be of 6 character`;
      }else if(error?.hasOwnProperty("maxlength")){
        return `${label} must be of 10 character `;
      }
      else if(error?.hasOwnProperty("pattern")){
        // console.log(control);

        if(control === 'password' || control === 'confirm_password'){
          return `${label} must be 3 character and must not contain spaces`
        }else{
          let pattern = error.pattern.requiredPattern;
          return this.PATTERN_ERRORS(pattern, label);
        }
      }
    }

    return '';
  }

  PATTERN_ERRORS(pattern:any , label:string){

    if(pattern == REGEX.email){
      return `${label} is invalid`
    }
    else if (pattern == REGEX.password){
      return `${label} is invalid`
    }
    return ''
  }

}
