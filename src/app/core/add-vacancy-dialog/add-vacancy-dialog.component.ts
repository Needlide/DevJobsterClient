import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateVacancyDialogComponent } from '../update-vacancy-dialog/update-vacancy-dialog.component';
import { AddVacancy } from '../../models/vacancy/add-vacancy.model';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-vacancy-dialog',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './add-vacancy-dialog.component.html',
  styleUrl: './add-vacancy-dialog.component.scss',
})
export class AddVacancyDialogComponent {
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  locations: string[] = ['Remote', 'Office', 'Hybrid'];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateVacancyDialogComponent>
  ) {
    this.form = this.fb.group({
      title: [],
      description: [],
      salary: 0,
      requirements: [],
      companyWebsite: [],
      typeOfJob: [],
      location: [],
      country: [],
      benefits: [],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const addVacancy: AddVacancy = {
        ...this.form.value,
      };
      this.dialogRef.close(addVacancy);
    }
  }
}
