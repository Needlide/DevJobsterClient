import { Component, OnInit } from '@angular/core';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VacancyService } from '../data-services/vacancy.service';
import { MatDialog } from '@angular/material/dialog';
import { VacancyDetailsDialogComponent } from '../vacancy-details-dialog/vacancy-details-dialog.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-applied-jobs',
  imports: [CommonModule, MatCardModule, MatButtonModule, HeaderComponent],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.scss',
})
export class AppliedJobsComponent implements OnInit {
  constructor(
    private vacancyService: VacancyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vacancyService.getUserVacancyApplications().subscribe({
      next: (data) => (this.vacancies = data.data),
    });
  }

  vacancies: VacancyView[] = [];

  openVacancyDetails(vacancy: VacancyView): void {
    this.dialog.open(VacancyDetailsDialogComponent, {
      width: '600px',
      data: vacancy,
    });
  }
}
