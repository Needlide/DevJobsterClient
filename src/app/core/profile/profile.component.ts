import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RecruiterProfileComponent } from '../recruiter-profile/recruiter-profile.component';

@Component({
  selector: 'app-profile',
  imports: [UserProfileComponent, CommonModule, RecruiterProfileComponent],
  template: `<app-user-profile *ngIf="userRole === 'user'"></app-user-profile>
    <app-recruiter-profile
      *ngIf="userRole === 'recruiter'"
    ></app-recruiter-profile>`,
})
export class ProfileComponent implements OnInit {
  userRole: string | null = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }
}
