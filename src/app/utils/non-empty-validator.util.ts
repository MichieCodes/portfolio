import { AbstractControl } from "@angular/forms";

export function NonEmptyValidator(control: AbstractControl) : {[key: string]: any} | null {
  return !control.value.trim() ? {'isBlank': true} : null;
}