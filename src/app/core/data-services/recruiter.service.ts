import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginRegisterModel } from '../../models/login-register.model';
import { RecruiterView } from '../../models/recruiter/recruiter-view.model';
import { UserAuthentication } from '../../models/user-authentication.model';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private apiUrl = `${environment.apiUrl}/api/recruiters`;

  constructor(private http: HttpClient) {}

  /**
   * Get all recruiters (Admin only)
   */
  getAllRecruiters(): Observable<RecruiterView[]> {
    return this.http.get<RecruiterView[]>(`${this.apiUrl}/`);
  }

  /**
   * Get current recruiter profile
   */
  getCurrentRecruiter(): Observable<RecruiterView> {
    return this.http.get<RecruiterView>(`${this.apiUrl}/me`);
  }

  /**
   * Register a new recruiter
   */
  registerRecruiter(model: LoginRegisterModel): Observable<RecruiterView> {
    return this.http.post<RecruiterView>(`${this.apiUrl}/`, model);
  }

  /**
   * Update current recruiter profile
   */
  updateRecruiterProfile(update: RecruiterView): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/me`, update);
  }

  /**
   * Reset recruiter password
   */
  resetPassword(auth: UserAuthentication): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reset-password`, auth);
  }

  /**
   * Delete current recruiter account
   */
  deleteAccount(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/me`);
  }
}
