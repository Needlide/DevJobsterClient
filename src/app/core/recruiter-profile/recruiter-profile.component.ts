import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recruiter-profile',
  imports: [
    HeaderComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './recruiter-profile.component.html',
  styleUrl: './recruiter-profile.component.scss',
})
export class RecruiterProfileComponent {
  firstName: string = '';
  lastName: string = '';
  notes?: string | undefined;
  company: string = '';
  phoneNumber: string = '';

  buttonText = 'Edit';

  onClick(): void {}
}
