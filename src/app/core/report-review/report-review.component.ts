import { Component, OnInit } from '@angular/core';
import { ReportView } from '../../models/admin/report-view.model';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-report-review',
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    HeaderComponent,
  ],
  templateUrl: './report-review.component.html',
  styleUrl: './report-review.component.scss',
})
export class ReportReviewComponent implements OnInit {
  report: ReportView | undefined;
  error: string = '';

  constructor() {}

  ngOnInit(): void {
    this.report = history.state.report;

    if (!this.report) this.error = 'Error occured during report retrieval';
  }
}
