import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  createApplication(vacancyId: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/applications`, { vacancyId });
  }
}
