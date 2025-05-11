import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RecruiterDashboardComponent } from '../recruiter-dashboard/recruiter-dashboard.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AdminDashboardComponent,
    RecruiterDashboardComponent,
    UserDashboardComponent,
  ],
  template: `
    <app-admin-dashboard *ngIf="userRole === 'admin'"></app-admin-dashboard>
    <app-recruiter-dashboard
      *ngIf="userRole === 'recruiter'"
    ></app-recruiter-dashboard>
    <app-user-dashboard *ngIf="userRole === 'user'"></app-user-dashboard>
  `,
})
export class DashboardComponent implements OnInit {
  userRole: string | null = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }
}
