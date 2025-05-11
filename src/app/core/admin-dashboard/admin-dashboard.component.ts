import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RegisteredAccountShortView } from '../../models/registered-account/registered-account.model';
import { ReportView } from '../../models/admin/report-view.model';
import { Router } from '@angular/router';
import { AdminService } from '../data-services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [HeaderComponent, MatListModule, CommonModule, MatButtonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  registeredAccounts: RegisteredAccountShortView[] = [];
  reports: ReportView[] = [];

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getRegisteredAccounts().subscribe({
      next: (data) => (this.registeredAccounts = data),
    });

    this.adminService.getAllReports().subscribe({
      next: (data) => (this.reports = data),
    });
  }

  onAccountClick(userId: string) {
    this.router.navigate(['/account-details', userId]);
  }

  onReportClick(report: ReportView) {
    this.router.navigate(['/report-detail'], { state: { report } });
  }
}
