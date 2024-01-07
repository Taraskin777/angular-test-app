import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorHelperService {
  getColorClassForBlock1(passwordStrength: string, password: string): string {
    return this.determineColorClassForBlock1(passwordStrength, password);
  }

  getColorClassForBlock2(passwordStrength: string, password: string): string {
    return this.determineColorClassForBlock2(passwordStrength, password);
  }

  getColorClassForBlock3(passwordStrength: string, password: string): string {
    return this.determineColorClassForBlock3(passwordStrength, password);
  }

  private determineColorClassForBlock1(
    passwordStrength: string,
    password: string
  ): string {
    if (
      (passwordStrength === 'Weak' || passwordStrength === 'Easy') &&
      password.length > 0
    ) {
      return 'red';
    } else if (
      (passwordStrength !== 'Medium' &&
        passwordStrength !== 'Strong' &&
        passwordStrength !== 'Weak') ||
      password.length === 0
    ) {
      return 'gray';
    } else if (passwordStrength === 'Strong') {
      return 'green';
    } else if (passwordStrength === 'Medium' && password.length > 0) {
      return 'yellow';
    } else {
      return '';
    }
  }

  private determineColorClassForBlock2(
    passwordStrength: string,
    password: string
  ): string {
    if (passwordStrength === 'Weak') {
      return 'red';
    } else if (passwordStrength === 'Medium' && password.length > 0) {
      return 'yellow';
    } else if (
      (passwordStrength !== 'Medium' && passwordStrength !== 'Strong') ||
      password.length === 0
    ) {
      return 'gray';
    } else if (passwordStrength === 'Strong') {
      return 'green';
    } else return '';
  }

  private determineColorClassForBlock3(
    passwordStrength: string,
    password: string
  ): string {
    if (passwordStrength === 'Weak') {
      return 'red';
    } else if (
      (passwordStrength !== 'Medium' &&
        passwordStrength !== 'Strong' &&
        passwordStrength !== 'Weak') ||
      (passwordStrength === 'Medium' && password.length > 0)
    ) {
      return 'gray';
    } else if (passwordStrength === 'Strong') {
      return 'green';
    } else return '';
  }
}
