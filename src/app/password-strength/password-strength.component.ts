import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidatorService } from '../services/password-validator.service';
import { ColorHelperService } from '../services/color-helper.service';

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
  colorClassBlock1: string = '';
  colorClassBlock2: string = '';
  colorClassBlock3: string = '';

  constructor(
    private passwordValidatorService: PasswordValidatorService,
    private colorHelperService: ColorHelperService
  ) {}

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

    this.colorClassBlock1 = this.colorHelperService.getColorClassForBlock1(
      this.passwordStrength,
      this.password
    );

    this.colorClassBlock2 = this.colorHelperService.getColorClassForBlock2(
      this.passwordStrength,
      this.password
    );

    this.colorClassBlock3 = this.colorHelperService.getColorClassForBlock3(
      this.passwordStrength,
      this.password
    );
  }
}
