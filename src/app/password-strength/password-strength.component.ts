import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
})
export class PasswordStrengthComponent {
  @Input() password: string = '';
  passwordStrength: string = '';
  ngOnInit(): void {
    this.checkPasswordStrength();
  }
  onInputChange(event: Event): void {
    const passwordValue = (event.target as HTMLInputElement).value;
    this.password = passwordValue;
    this.checkPasswordStrength();
  }
  checkPasswordStrength(): void {
    const passwordLength = this.password.length;
    const onlyLetters = /^[a-zA-Z]+$/.test(this.password);
    const onlyNumbers = /^[0-9]+$/.test(this.password);
    const onlySymbols = /^[^a-zA-Z0-9]+$/.test(this.password);

    if (passwordLength === 0) {
      this.passwordStrength = 'Empty';
    } else if (passwordLength < 8) {
      this.passwordStrength = 'Weak';
    } else if (onlyLetters || onlyNumbers || onlySymbols) {
      this.passwordStrength = 'Easy';
    } else if (
      /[a-zA-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[^a-zA-Z0-9]/.test(this.password)
    ) {
      this.passwordStrength = 'Strong';
    } else {
      this.passwordStrength = 'Medium';
    }
  }
}
