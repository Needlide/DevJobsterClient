import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../environments/environment.development';
import { LoginRegisterModel } from '../models/login-register.model';
import { Observable } from 'rxjs/internal/Observable';

interface TokenPayload {
  exp: number;
  role: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(credentials: LoginRegisterModel): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(
      `${this.apiUrl}/auth/login`,
      credentials
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getDecodedToken(): TokenPayload | null {
    const token = this.getToken();
    if (!token) return null;
    return jwtDecode<TokenPayload>(token);
  }

  getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    return decoded?.role || null;
  }
}
