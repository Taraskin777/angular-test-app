import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidatorService } from '../password-validator.service';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
})
export class PasswordStrengthComponent implements OnInit {
  @Input() password: string = '';
  passwordStrength: string = '';

  constructor(private passwordValidatorService: PasswordValidatorService) {}

  ngOnInit(): void {
    this.checkPasswordStrength();
  }

  onInputChange(event: Event): void {
    const passwordValue = (event.target as HTMLInputElement).value;
    this.password = passwordValue;
    this.checkPasswordStrength();
  }

  checkPasswordStrength(): void {
    this.passwordStrength = this.passwordValidatorService.checkPasswordStrength(
      this.password
    );
  }
}
