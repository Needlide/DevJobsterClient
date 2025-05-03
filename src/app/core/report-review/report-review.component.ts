import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report.model';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-review',
  imports: [CommonModule, MatCardModule, MatDividerModule, MatToolbarModule],
  templateUrl: './report-review.component.html',
  styleUrl: './report-review.component.scss',
})
export class ReportReviewComponent implements OnInit {
  report: Report | undefined;
  error: string = '';

  constructor() {}

  ngOnInit(): void {
    this.report = history.state.report;

    if (!this.report) this.error = 'Error occured during report retrieval';
  }
}
