import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-update-vacancy-dialog',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './update-vacancy-dialog.component.html',
  styleUrl: './update-vacancy-dialog.component.scss',
})
export class UpdateVacancyDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateVacancyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VacancyView
  ) {
    this.form = this.fb.group({
      description: [data.description, Validators.required],
      requirements: [data.requirements, Validators.required],
      companyWebsite: [data.companyWebsite, Validators.required],
      typeOfJob: [data.typeOfJob, Validators.required],
      location: [data.location, Validators.required],
      country: [data.country, Validators.required],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedVacancy: VacancyView = {
        ...this.data,
        ...this.form.value,
      };
      this.dialogRef.close(updatedVacancy);
    }
  }
}
