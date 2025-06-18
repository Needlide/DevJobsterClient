import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { HeaderComponent } from '../header/header.component';
import { MatCardModule } from '@angular/material/card';
import { RecruiterService } from '../data-services/recruiter.service';
import { Router } from '@angular/router';
import { VacancyService } from '../data-services/vacancy.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVacancyDialogComponent } from '../update-vacancy-dialog/update-vacancy-dialog.component';
import { UpdateVacancy } from '../../models/vacancy/update-vacancy.model';
import { AddVacancyDialogComponent } from '../add-vacancy-dialog/add-vacancy-dialog.component';
import { AddVacancy } from '../../models/vacancy/add-vacancy.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recruiter-dashboard',
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    HeaderComponent,
    MatCardModule,
  ],
  templateUrl: './recruiter-dashboard.component.html',
  styleUrl: './recruiter-dashboard.component.scss',
})
export class RecruiterDashboardComponent implements OnInit {
  constructor(
    private recruiterService: RecruiterService,
    private vacancyService: VacancyService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recruiterService.getRecruitersVacancies().subscribe({
      next: (data) => (this.vacancies = data.data),
    });
  }

  vacancies: VacancyView[] = [];
  selectedVacancy: VacancyView | undefined;

  onVacancySelect(vacancy: VacancyView): void {
    this.selectedVacancy = vacancy;
  }

  add(): void {
    const dialogRef = this.dialog.open(AddVacancyDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: AddVacancy | undefined) => {
      if (result) {
        this.vacancyService.createVacancy(result).subscribe({
          next: () => {
            this.recruiterService.getRecruitersVacancies().subscribe({
              next: (data) => (this.vacancies = data.data),
            });
          },
          error: (err) => {
            console.error('Failed to add vacancy', err);
            const message = this.extractErrorMessages(err);
            this.snackBar.open(message, 'Close', { duration: 5000 });
          },
        });
      }
    });
  }

  update(): void {
    if (!this.selectedVacancy) return;

    const dialogRef = this.dialog.open(UpdateVacancyDialogComponent, {
      width: '600px',
      data: { ...this.selectedVacancy },
    });

    dialogRef.afterClosed().subscribe((result: VacancyView | undefined) => {
      if (result) {
        let updateVacancy: UpdateVacancy = {
          description: result.description,
          requirements: result.requirements,
          companyWebsite: result.companyWebsite,
          typeOfJob: result.typeOfJob,
          location: result.location,
          vacancyId: result.vacancyId,
        };

        this.vacancyService.updateVacancy(updateVacancy).subscribe({
          next: () => {
            const index = this.vacancies.findIndex(
              (v) => v.vacancyId === result.vacancyId
            );
            if (index !== -1) {
              this.vacancies[index] = { ...this.vacancies[index], ...result };
              this.selectedVacancy = this.vacancies[index];
            }
          },
          error: (err) => {
            console.error('Failed to update vacancy', err);
            const message = this.extractErrorMessages(err);
            this.snackBar.open(message, 'Close', { duration: 5000 });
          },
        });
      }
    });
  }

  deleteVacancy(): void {
    if (this.selectedVacancy)
      this.vacancyService
        .deleteVacancy(this.selectedVacancy?.vacancyId)
        .subscribe({
          next: () => {
            this.recruiterService.getRecruitersVacancies().subscribe({
              next: (data) => (this.vacancies = data.data),
            });

            this.selectedVacancy = undefined;

            this.snackBar.open('Deleted successfully', 'Close', {
              duration: 5000,
            });
          },
          error: (err) => {
            console.error('Failed to delete vacancy', err);
            const message = this.extractErrorMessages(err);
            this.snackBar.open(message, 'Close', { duration: 5000 });
          },
        });
  }

  applicants(): void {
    this.router.navigate(['/applicants', this.selectedVacancy?.vacancyId]);
  }

  private extractErrorMessages(error: any): string {
    if (
      error.status === 400 &&
      error.error &&
      typeof error.error === 'object'
    ) {
      if (Array.isArray(error.error.errors)) {
        return error.error.errors
          .map((e: any) => e.errorMessage || e.message)
          .join('\n');
      }

      if (error.error.errors) {
        return Object.values(error.error.errors)
          .map((errArr: any) => errArr.join(', '))
          .join('\n');
      }
    }

    return 'An unexpected error occurred. Please try again.';
  }
}
