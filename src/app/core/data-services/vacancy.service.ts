import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { AddVacancy } from '../../models/vacancy/add-vacancy.model';
import { UpdateVacancy } from '../../models/vacancy/update-vacancy.model';
import { UserApplicationView } from '../../models/user/user-application-view.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  private apiUrl = `${environment.apiUrl}/vacancies`;

  constructor(private http: HttpClient) {}

  /**
   * Get all vacancies (User & Admin)
   */
  getAllVacancies(): Observable<ApiResponse<VacancyView[]>> {
    return this.http.get<ApiResponse<VacancyView[]>>(`${this.apiUrl}/`);
  }

  /**
   * Get a single vacancy by ID
   */
  getVacancyById(vacancyId: string): Observable<ApiResponse<VacancyView>> {
    return this.http.get<ApiResponse<VacancyView>>(
      `${this.apiUrl}/${vacancyId}`
    );
  }

  /**
   * Create a new vacancy (Recruiter only)
   */
  createVacancy(vacancy: AddVacancy): Observable<ApiResponse<AddVacancy>> {
    return this.http.post<ApiResponse<AddVacancy>>(`${this.apiUrl}/`, vacancy);
  }

  /**
   * Update a vacancy (Recruiter only)
   */
  updateVacancy(vacancy: UpdateVacancy): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(
      `${this.apiUrl}/${vacancy.vacancyId}`,
      vacancy
    );
  }

  /**
   * Delete a vacancy (Recruiter & Admin only)
   */
  deleteVacancy(vacancyId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${vacancyId}`);
  }

  /**
   * Get applications for a specific vacancy (Recruiter only)
   */
  getApplicationsByVacancy(
    vacancyId: string
  ): Observable<ApiResponse<UserApplicationView[]>> {
    return this.http.get<ApiResponse<UserApplicationView[]>>(
      `${this.apiUrl}/${vacancyId}/applications`
    );
  }

  /**
   * Get vacancies the current user applied to (User only)
   */
  getUserVacancyApplications(): Observable<ApiResponse<VacancyView[]>> {
    return this.http.get<ApiResponse<VacancyView[]>>(
      `${this.apiUrl}/applications`
    );
  }
}
