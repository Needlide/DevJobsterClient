import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { UserProfileView } from '../../models/user/user-profile-view.model';
import { UserService } from '../data-services/user.service';
import { UserUpdate } from '../../models/user/user-update.model';
import { HttpErrorResponse } from '@angular/common/http';

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
export class UserProfileComponent implements OnInit {
  user: UserProfileView | undefined;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: (data) => (this.user = data.data),
    });
  }

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
    'Ukraine',
  ];

  readonly englishLevels: string[] = [
    'Beginner (A1)',
    'Elementary (A2)',
    'Intermediate (B1)',
    'Upper Intermediate (B2)',
    'Advanced (C1)',
    'Proficient (C2)',
  ];

  buttonText = 'Edit';

  onClick(): void {
    if (!this.user) {
      return;
    }

    let updateUser: UserUpdate = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      role: this.user.role,
      skills: this.user.skills,
      location: this.user.location,
      yearsOfExperience: String(this.user.yearsOfExperience),
      englishLevel: String(this.user.englishLevel),
    };

    this.userService.updateUser(updateUser).subscribe({
      next: () => {
        this.buttonText = 'Saved';
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 400 && error.error?.errors) {
          console.error(error);
          console.log('Validation Errors:', error.error.errors);
        }
      },
    });
  }
}
