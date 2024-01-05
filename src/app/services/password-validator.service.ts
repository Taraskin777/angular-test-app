import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordValidatorService {
  checkPasswordStrength(password: string): string {
    const passwordLength = password.length;
    const onlyLetters = /^[a-zA-Z]+$/.test(password);
    const onlyNumbers = /^[0-9]+$/.test(password);
    const onlySymbols = /^[^a-zA-Z0-9]+$/.test(password);

    if (passwordLength === 0) {
      return 'Empty';
    } else if (passwordLength < 8) {
      return 'Weak';
    } else if (onlyLetters || onlyNumbers || onlySymbols) {
      return 'Easy';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      return 'Strong';
    } else {
      return 'Medium';
    }
  }
}
