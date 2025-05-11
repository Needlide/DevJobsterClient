import { Component, OnInit } from '@angular/core';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VacancyService } from '../data-services/vacancy.service';

@Component({
  selector: 'app-applied-jobs',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.scss',
})
export class AppliedJobsComponent implements OnInit {
  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getUserVacancyApplications().subscribe({
      next: (data) => (this.vacancies = data),
    });
  }

  vacancies: VacancyView[] = [];
}
