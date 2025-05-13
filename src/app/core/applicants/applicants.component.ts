import { Component } from '@angular/core';
import { UserApplicationView } from '../../models/user/user-application-view.model';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-applicants',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.scss',
})
export class ApplicantsComponent {
  applicants: UserApplicationView[] = [];
}
