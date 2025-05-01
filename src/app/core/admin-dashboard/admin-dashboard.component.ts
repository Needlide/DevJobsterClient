import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  RegisteredAccountShortView,
  UserType,
} from '../../models/registered-account.model';
import { Report } from '../../models/report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [HeaderComponent, MatListModule, CommonModule, MatButtonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  constructor(private router: Router) {}

  MOCK_REGISTERED_ACCOUNTS: RegisteredAccountShortView[] = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      role: UserType.Admin,
      userId: 'a1b2c3d4-e5f6-7890-ab12-cdef34567890',
      createdAt: '2024-12-01T10:15:30Z',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      role: UserType.User,
      userId: 'b2c3d4e5-f6a7-8901-bc23-def456789012',
      createdAt: '2024-11-25T09:00:00Z',
    },
    {
      firstName: 'Carol',
      lastName: 'Williams',
      role: UserType.Recruiter,
      userId: 'c3d4e5f6-a7b8-9012-cd34-ef5678901234',
      createdAt: '2025-01-03T14:45:00Z',
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      role: UserType.User,
      userId: 'd4e5f6a7-b8c9-0123-de45-f67890123456',
      createdAt: '2025-03-10T08:30:00Z',
    },
    {
      firstName: 'Eva',
      lastName: 'Davis',
      role: UserType.Admin,
      userId: 'e5f6a7b8-c9d0-1234-ef56-789012345678',
      createdAt: '2024-10-15T12:00:00Z',
    },
    {
      firstName: 'Frank',
      lastName: 'Miller',
      role: UserType.Recruiter,
      userId: 'f6a7b8c9-d0e1-2345-f067-890123456789',
      createdAt: '2025-02-20T16:20:00Z',
    },
    {
      firstName: 'Grace',
      lastName: 'Taylor',
      role: UserType.User,
      userId: 'a7b8c9d0-e1f2-3456-0789-012345678901',
      createdAt: '2025-04-01T11:10:00Z',
    },
  ];

  MOCK_REPORTS: Report[] = [
    {
      title: 'Monthly Sales Report',
      body: 'This report covers the monthly sales data for all regions.',
      reportObjectId: 'rep-001',
      createdAt: '2025-04-15T10:30:00Z',
    },
    {
      title: 'Customer Feedback Summary',
      body: 'A summary of customer feedback collected from surveys.',
      reportObjectId: 'rep-002',
      createdAt: '2025-04-18T14:12:00Z',
    },
    {
      title: 'Website Traffic Overview',
      body: 'Overview of the website traffic sources and performance.',
      reportObjectId: 'rep-003',
      createdAt: '2025-04-20T08:45:00Z',
    },
    {
      title: 'Inventory Status',
      body: 'Current inventory levels and reorder status.',
      reportObjectId: 'rep-004',
      createdAt: '2025-04-22T11:00:00Z',
    },
    {
      title: 'Quarterly Financial Report',
      body: 'Detailed financial performance for the past quarter.',
      reportObjectId: 'rep-005',
      createdAt: '2025-03-31T17:20:00Z',
    },
  ];

  onAccountClick(userId: string) {
    this.router.navigate(['/account-details', userId]);

    //   ngOnInit(): void {
    //   const userId = this.route.snapshot.paramMap.get('userId');
    //   if (userId) {
    //     this.accountService.getAccountById(userId).subscribe({
    //       next: (data) => (this.account = data),
    //       error: () => {
    //         // handle error or redirect
    //       }
    //     });
    //   }
    // }
  }

  onReportClick(report: Report) {}
}
