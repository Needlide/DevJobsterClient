import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { VacancyService } from '../data-services/vacancy.service';
import { ApplicationService } from '../data-services/application.service';

@Component({
  selector: 'app-user-dashboard',
  imports: [
    HeaderComponent,
    MatListModule,
    CommonModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: '0',
          padding: '0 16px',
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: '1',
          overflow: 'hidden',
        })
      ),
      transition('collapsed <=> expanded', animate('300ms ease')),
    ]),
  ],
})
export class UserDashboardComponent implements OnInit {
  constructor(
    private vacancyService: VacancyService,
    private applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.vacancyService.getAllVacancies().subscribe({
      next: (data) => (this.vacancies = data.data),
      error: (error) => console.error(error),
    });
  }

  filters = {
    title: '',
    experienceLevel: '',
    jobType: '',
    location: '',
    salaryMin: 0,
    salaryMax: 200000,
  };

  isExpanded: boolean = false;
  vacancies: VacancyView[] = [];
  selectedVacancy: VacancyView | undefined;
  experienceLevels: string[] = ['Entry Level', 'Mid Level', 'Senior', 'Lead'];
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  locations: string[] = ['Remote', 'Office', 'Hybrid'];

  minSalary = 0;
  maxSalary = 999999;
  salaryRange = [0, 200000];

  onVacancySelect(vacancy: VacancyView): void {
    this.selectedVacancy = vacancy;
  }

  onSalaryInputChange(index: number) {
    if (index === 0 && this.salaryRange[0] > this.salaryRange[1]) {
      this.salaryRange[0] = this.salaryRange[1];
    } else if (index === 1 && this.salaryRange[1] < this.salaryRange[0]) {
      this.salaryRange[1] = this.salaryRange[0];
    }
  }

  apply(): void {
    if (this.selectedVacancy)
      this.applicationService.createApplication(this.selectedVacancy.vacancyId);
  }

  toggleFilter(): void {
    this.isExpanded = !this.isExpanded;
  }

  get filteredVacancies(): VacancyView[] {
    return this.vacancies.filter((v) => {
      const matchesTitle = v.title
        .toLowerCase()
        .includes(this.filters.title.toLowerCase());
      const matchesJobType =
        !this.filters.jobType || v.typeOfJob === this.filters.jobType;
      const matchesLocation =
        !this.filters.location || v.location === this.filters.location;

      return matchesTitle && matchesJobType && matchesLocation;
    });
  }
}
