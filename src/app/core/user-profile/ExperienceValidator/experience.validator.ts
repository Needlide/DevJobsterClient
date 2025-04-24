import { AbstractControl, ValidationErrors } from '@angular/forms';

export function experienceValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (value === null || value === undefined || value === '') return null;

  const numericValue = parseFloat(value);

  if (isNaN(numericValue) || numericValue < 0 || numericValue > 99) {
    return { experienceInvalid: true };
  }

  return null;
}
