import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RecruiterService } from '../data-services/recruiter.service';
import { RecruiterView } from '../../models/recruiter/recruiter-view.model';

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
export class RecruiterProfileComponent implements OnInit {
  recruiter: RecruiterView | undefined;
  constructor(private recruiterService: RecruiterService) {}

  ngOnInit(): void {
    this.recruiterService.getCurrentRecruiter().subscribe({
      next: (data) => (this.recruiter = data.data),
    });
  }

  buttonText = 'Edit';

  onClick(): void {
    if (!this.recruiter) {
      return;
    }

    this.recruiterService.updateRecruiterProfile(this.recruiter).subscribe({
      next: () => {
        this.buttonText = 'Saved';
      },
    });
  }
}
