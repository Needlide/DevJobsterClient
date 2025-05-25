import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginRegisterModel } from '../../models/auth/login-register.model';
import { RecruiterView } from '../../models/recruiter/recruiter-view.model';
import { UserAuthentication } from '../../models/auth/user-authentication.model';
import { VacancyView } from '../../models/vacancy/vacancy.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private apiUrl = `${environment.apiUrl}/recruiters`;

  constructor(private http: HttpClient) {}

  /**
   * Get all recruiters (Admin only)
   */
  getAllRecruiters(): Observable<ApiResponse<RecruiterView[]>> {
    return this.http.get<ApiResponse<RecruiterView[]>>(`${this.apiUrl}/`);
  }

  /**
   * Get current recruiter profile
   */
  getCurrentRecruiter(): Observable<ApiResponse<RecruiterView>> {
    return this.http.get<ApiResponse<RecruiterView>>(`${this.apiUrl}/me`);
  }

  /**
   * Register a new recruiter
   */
  registerRecruiter(
    model: LoginRegisterModel
  ): Observable<ApiResponse<RecruiterView>> {
    return this.http.post<ApiResponse<RecruiterView>>(`${this.apiUrl}/`, model);
  }

  /**
   * Update current recruiter profile
   */
  updateRecruiterProfile(update: RecruiterView): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(`${this.apiUrl}/me`, update);
  }

  /**
   * Reset recruiter password
   */
  resetPassword(auth: UserAuthentication): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.apiUrl}/reset-password`,
      auth
    );
  }

  /**
   * Delete current recruiter account
   */
  deleteAccount(): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/me`);
  }

  /**
   * Get recruiter's vacancies
   */
  getRecruitersVacancies(): Observable<ApiResponse<VacancyView[]>> {
    return this.http.get<ApiResponse<VacancyView[]>>(
      `${this.apiUrl}/vacancies`
    );
  }
}
