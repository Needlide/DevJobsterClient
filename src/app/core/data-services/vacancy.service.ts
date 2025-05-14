import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { AddVacancy } from '../../models/vacancy/add-vacancy.model';
import { UpdateVacancy } from '../../models/vacancy/update-vacancy.model';
import { UserApplicationView } from '../../models/user/user-application-view.model';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  private apiUrl = `${environment.apiUrl}/api/vacancies`;

  constructor(private http: HttpClient) {}

  /**
   * Get all vacancies (User & Admin)
   */
  getAllVacancies(): Observable<VacancyView[]> {
    return this.http.get<VacancyView[]>(`${this.apiUrl}/`);
  }

  /**
   * Get a single vacancy by ID
   */
  getVacancyById(vacancyId: string): Observable<VacancyView> {
    return this.http.get<VacancyView>(`${this.apiUrl}/${vacancyId}`);
  }

  /**
   * Create a new vacancy (Recruiter only)
   */
  createVacancy(vacancy: AddVacancy): Observable<AddVacancy> {
    return this.http.post<AddVacancy>(`${this.apiUrl}/`, vacancy);
  }

  /**
   * Update a vacancy (Recruiter only)
   */
  updateVacancy(vacancy: UpdateVacancy): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${vacancy.vacancyId}`, vacancy);
  }

  /**
   * Delete a vacancy (Recruiter & Admin only)
   */
  deleteVacancy(vacancyId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vacancyId}`);
  }

  /**
   * Get applications for a specific vacancy (Recruiter only)
   */
  getApplicationsByVacancy(
    vacancyId: string
  ): Observable<UserApplicationView[]> {
    return this.http.get<UserApplicationView[]>(
      `${this.apiUrl}/${vacancyId}/applications`
    );
  }

  /**
   * Get vacancies the current user applied to (User only)
   */
  getUserVacancyApplications(): Observable<VacancyView[]> {
    return this.http.get<VacancyView[]>(`${this.apiUrl}/applications`);
  }
}
