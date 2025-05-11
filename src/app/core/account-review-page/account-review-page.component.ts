import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileView } from '../../models/user/user-profile-view.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AdminService } from '../data-services/admin.service';
import { RegisteredAccountShortView } from '../../models/registered-account/registered-account.model';

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
  userId: string | null = '';
  user: RegisteredAccountShortView | undefined;
  error: string = '';

  showDeclineReason: boolean = false;
  declineReason: string = '';

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    if (this.userId) {
      let userIdNumber = Number.parseInt(this.userId);

      this.adminService.getRegisteredAccountById(userIdNumber).subscribe({
        next: (data) => (this.user = data),
        error: () => {
          this.error = 'Error occured during account retrieval';
        },
      });
    }
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
