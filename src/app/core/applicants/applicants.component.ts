import { Component, OnInit } from '@angular/core';
import { UserApplicationView } from '../../models/user/user-application-view.model';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../data-services/vacancy.service';

@Component({
  selector: 'app-applicants',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.scss',
})
export class ApplicantsComponent implements OnInit {
  applicants: UserApplicationView[] = [];
  vacancyId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.vacancyId = this.route.snapshot.paramMap.get('userId');

    if (this.vacancyId) {
      this.vacancyService.getApplicationsByVacancy(this.vacancyId).subscribe({
        next: (data) => (this.applicants = data),
      });
    }
  }
}
