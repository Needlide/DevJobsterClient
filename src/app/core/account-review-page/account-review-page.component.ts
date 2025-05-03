import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../data-services/user.service';
import { User } from '../../models/user.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-review-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HeaderComponent,
  ],
  templateUrl: './account-review-page.component.html',
  styleUrl: './account-review-page.component.scss',
})
export class AccountReviewPageComponent implements OnInit {
  userId: string | undefined;
  user: User | undefined;
  error: string = '';

  showDeclineReason: boolean = false;
  declineReason: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = {
      firstName: 'name',
      lastName: 'last name',
      role: 'engineer',
      skills: 'my skills',
      location: 'remote',
      yearsOfExperience: '12',
      englishLevel: 'A2',
    };
    // this.userId = this.route.snapshot.paramMap.get('userId');

    // if (userId) {
    //   this.userService.getUserById(userId).subscribe({
    //     next: (data) => (this.user = data),
    //     error: () => {
    //       this.errorMessage = 'Error occured during account retrieval';
    //     },
    //   });
    // }
  }

  verifyUser(): void {}

  toggleDecline(): void {
    this.showDeclineReason = !this.showDeclineReason;
  }

  submitDecline(): void {
    if (!this.declineReason.trim()) {
      alert('Please provide a reason for declining the profile.');
      return;
    }
  }
}
