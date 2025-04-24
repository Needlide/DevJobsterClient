import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CommaSeparatedValidatorDirective } from './CommaSeparatedValidator/comma-separated-validator.directive';
import { ExperienceValidatorDirective } from './ExperienceValidator/experience-validator.directive';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-profile',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    CommaSeparatedValidatorDirective,
    ExperienceValidatorDirective,
    HeaderComponent,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  readonly countries: string[] = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    // Add more countries as needed
  ];

  readonly englishLevels: string[] = [
    'Beginner (A1)',
    'Elementary (A2)',
    'Intermediate (B1)',
    'Upper Intermediate (B2)',
    'Advanced (C1)',
    'Proficient (C2)',
  ];

  role = '';
  skills = '';
  yearsOfExperience = '';
  location = '';
  englishLevel = '';

  buttonText = 'Edit';

  onClick(): void {}
}
