import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { VacancyView } from '../../models/vacancy/vacancy.model';

@Component({
  selector: 'app-vacancy-details-dialog',
  imports: [MatDialogModule],
  templateUrl: './vacancy-details-dialog.component.html',
  styleUrl: './vacancy-details-dialog.component.scss',
})
export class VacancyDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VacancyDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public vacancy: VacancyView
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
