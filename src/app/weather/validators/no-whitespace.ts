import { AbstractControl, ValidationErrors } from '@angular/forms';

export const noWhitespaceValidator = (
  control: AbstractControl,
): ValidationErrors | null => {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { whitespace: true };
};
