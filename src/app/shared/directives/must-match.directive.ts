import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[mustMatch]',
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validator {

  constructor() { }

  @Input('mustMatch') mustMatch: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return this.MustMatch(this.mustMatch[0], this.mustMatch[1], this.mustMatch[2], this.mustMatch[3])(formGroup);
    }

    MustMatch(email, confirmEmail, password, confirmPassword) {
      return (formGroup: FormGroup) => {
          const emailControl = email;
          const confirmEmailControl = confirmEmail;

          const passwordControl = password;
          const confirmPasswordControl = confirmPassword;
  
          // return null if controls haven't initialised yet
          if (!emailControl || !confirmEmailControl || !passwordControl || !confirmPasswordControl  ) {
            return null;
          }
  
          // return null if another validator has already found an error on the matchingControl
          if ((confirmEmailControl.errors && !confirmEmailControl.errors.mustMatch) && (confirmPasswordControl.errors && !confirmPasswordControl.errors.mustMatch)) {
              return null;
          }
  
          // set error on matchingControl if validation fails
          if (emailControl.value !== confirmEmailControl.value) {
            confirmEmailControl.setErrors({ mustMatch: true });
          } else {
            confirmEmailControl.setErrors(null);
          }

          if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ mustMatch: true });
        } else {
          confirmPasswordControl.setErrors(null);
        }
      }
  }
}