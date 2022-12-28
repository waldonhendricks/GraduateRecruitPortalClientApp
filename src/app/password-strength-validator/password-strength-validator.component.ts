import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (this: any, control: AbstractControl): ValidationErrors | null {

  let value: string = control.value || '';

  if (!value) {
    return null
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return this.toast.showtoastrError("Missing uppercase charcater", "Weak password");

  }

  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    return this.toast.showtoastrError("Missing lowercase charcater", "Weak password");;
  }


  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    return this.toast.showtoastrError("Missing digits", "Weak password");
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (specialCharacters.test(value) === false) {
    return this.toast.showtoastrError("Missing special charcaters", "Weak password");
  }
  return null;
}
