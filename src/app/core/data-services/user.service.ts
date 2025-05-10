import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserProfileView } from '../../models/user/user-profile-view.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserUpdate } from '../../models/user/user-update.model';
import { LoginRegisterModel } from '../../models/auth/login-register.model';
import { UserAuthentication } from '../../models/auth/user-authentication.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<UserProfileView[]> {
    return this.httpClient.get<UserProfileView[]>(`${this.apiUrl}/`);
  }

  getCurrentUser(): Observable<UserProfileView> {
    return this.httpClient.get<UserProfileView>(`${this.apiUrl}/me`);
  }

  registerUser(model: LoginRegisterModel): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/`, model);
  }

  updateUser(user: UserUpdate): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/me`, user);
  }

  deleteUser(): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/me`);
  }

  resetPassword(userAuth: UserAuthentication): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/reset-password`, userAuth);
  }

  getUserApplications(): Observable<UserProfileView[]> {
    return this.httpClient.get<UserProfileView[]>(
      `${this.apiUrl}/my-applications`
    );
  }
}
