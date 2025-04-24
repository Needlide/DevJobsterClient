import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { commaSeparatedValidator } from './comma-separated-validator';

@Directive({
  selector: '[validateCommaSeparated]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CommaSeparatedValidatorDirective,
      multi: true,
    },
  ],
})
export class CommaSeparatedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return commaSeparatedValidator(control);
  }
}
