import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../models/api-response.model';
import { AddApplication } from '../../models/vacancy/add-application.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {}

  createApplication(
    vacancyId: string
  ): Observable<ApiResponse<AddApplication>> {
    return this.httpClient.post<ApiResponse<AddApplication>>(
      `${this.apiUrl}/applications`,
      { vacancyId }
    );
  }
}
