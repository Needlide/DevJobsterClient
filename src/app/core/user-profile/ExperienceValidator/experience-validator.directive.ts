import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { experienceValidator } from './experience.validator';

@Directive({
  selector: '[experience]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ExperienceValidatorDirective,
      multi: true,
    },
  ],
})
export class ExperienceValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return experienceValidator(control);
  }
}
