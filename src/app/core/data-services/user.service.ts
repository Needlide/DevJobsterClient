import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserProfileView } from '../../models/user/user-profile-view.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserUpdate } from '../../models/user/user-update.model';
import { LoginRegisterModel } from '../../models/auth/login-register.model';
import { UserAuthentication } from '../../models/auth/user-authentication.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<ApiResponse<UserProfileView[]>> {
    return this.httpClient.get<ApiResponse<UserProfileView[]>>(
      `${this.apiUrl}/`
    );
  }

  getCurrentUser(): Observable<ApiResponse<UserProfileView>> {
    return this.httpClient.get<ApiResponse<UserProfileView>>(
      `${this.apiUrl}/me`
    );
  }

  registerUser(model: LoginRegisterModel): Observable<ApiResponse<any>> {
    return this.httpClient.post<ApiResponse<any>>(`${this.apiUrl}/`, model);
  }

  updateUser(user: UserUpdate): Observable<ApiResponse<any>> {
    return this.httpClient.put<ApiResponse<any>>(`${this.apiUrl}/me`, user);
  }

  deleteUser(): Observable<ApiResponse<any>> {
    return this.httpClient.delete<ApiResponse<any>>(`${this.apiUrl}/me`);
  }

  resetPassword(userAuth: UserAuthentication): Observable<ApiResponse<any>> {
    return this.httpClient.post<ApiResponse<any>>(
      `${this.apiUrl}/reset-password`,
      userAuth
    );
  }

  getUserApplications(): Observable<ApiResponse<UserProfileView[]>> {
    return this.httpClient.get<ApiResponse<UserProfileView[]>>(
      `${this.apiUrl}/my-applications`
    );
  }
}
