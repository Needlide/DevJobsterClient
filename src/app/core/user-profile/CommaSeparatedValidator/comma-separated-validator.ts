import { AbstractControl, ValidationErrors } from '@angular/forms';

export function commaSeparatedValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value;

  if (!value) return null;

  const parts = value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length < 2 ? { commaSeparated: true } : null;
}
