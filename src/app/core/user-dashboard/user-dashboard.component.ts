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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSnackBarModule,
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
    private applicationService: ApplicationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.vacancyService.getAllVacancies().subscribe({
      next: (data) => {
        this.vacancies = data.data;
        if (this.filteredVacancies.length > 0 && !this.selectedVacancy) {
          this.selectedVacancy = this.filteredVacancies[0];
        }
      },
      error: (error) => console.error(error),
    });
  }

  isExpanded: boolean = false;
  vacancies: VacancyView[] = [];
  selectedVacancy: VacancyView | undefined;
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  locations: string[] = ['Remote', 'Office', 'Hybrid'];

  filters = {
    title: '',
    jobType: '',
    location: '',
  };

  onVacancySelect(vacancy: VacancyView): void {
    this.selectedVacancy = vacancy;
  }

  apply(): void {
    console.log(this.selectedVacancy);
    if (this.selectedVacancy) {
      this.applicationService
        .createApplication(this.selectedVacancy.vacancyId)
        .subscribe({
          next: (response) => {
            this.snackBar.open('Application submitted successfully!', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar'],
            });
          },
          error: (err) => {
            this.snackBar.open(
              'Error submitting application. Please try again.',
              'Close',
              {
                duration: 5000,
                panelClass: ['error-snackbar'],
              }
            );
          },
        });
    }
  }

  toggleFilter(): void {
    this.isExpanded = !this.isExpanded;
  }

  get filteredVacancies(): VacancyView[] {
    const filtered = this.vacancies.filter((v) => {
      const matchesTitle = v.title
        .toLowerCase()
        .includes(this.filters.title.toLowerCase());
      const matchesJobType =
        !this.filters.jobType || v.typeOfJob === this.filters.jobType;
      const matchesLocation =
        !this.filters.location || v.location === this.filters.location;

      return matchesTitle && matchesJobType && matchesLocation;
    });

    if (
      filtered.length > 0 &&
      this.selectedVacancy &&
      !filtered.some((v) => v.vacancyId === this.selectedVacancy?.vacancyId)
    ) {
      this.selectedVacancy = filtered[0];
    }

    return filtered;
  }
}

/*export class UserDashboardComponent implements OnInit {
  constructor(
    private vacancyService: VacancyService,
    private applicationService: ApplicationService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.vacancyService.getAllVacancies().subscribe({
      next: (data) => (this.vacancies = data.data),
      error: (error) => console.error(error),
    });
  }

  isExpanded: boolean = false;
  vacancies: VacancyView[] = [];
  selectedVacancy: VacancyView | undefined;
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  locations: string[] = ['Remote', 'Office', 'Hybrid'];

  filters = {
    title: '',
    jobType: this.jobTypes[0],
    location: this.locations[0],
  };

  onVacancySelect(vacancy: VacancyView): void {
    this.selectedVacancy = vacancy;
  }

  apply(): void {
    console.log(this.selectedVacancy);
    if (this.selectedVacancy) {
      this.applicationService
        .createApplication(this.selectedVacancy.vacancyId)
        .subscribe({
          next: (response) => {
            this.snackBar.open('Application submitted successfully!', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar'],
            });
          },
          error: (err) => {
            this.snackBar.open(
              'Error submitting application. Please try again.',
              'Close',
              {
                duration: 5000,
                panelClass: ['error-snackbar'],
              }
            );
          },
        });
    }
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
}*/
