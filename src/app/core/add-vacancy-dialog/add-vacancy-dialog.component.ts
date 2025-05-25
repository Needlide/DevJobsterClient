import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateVacancyDialogComponent } from '../update-vacancy-dialog/update-vacancy-dialog.component';
import { AddVacancy } from '../../models/vacancy/add-vacancy.model';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-vacancy-dialog',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './add-vacancy-dialog.component.html',
  styleUrl: './add-vacancy-dialog.component.scss',
})
export class AddVacancyDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateVacancyDialogComponent>
  ) {
    this.form = this.fb.group({
      title: [],
      description: [],
      salary: [],
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
