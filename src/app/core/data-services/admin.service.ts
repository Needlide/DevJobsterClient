import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RegisteredAccountShortView } from '../../models/registered-account/registered-account.model';
import { ReportView } from '../../models/admin/report-view.model';
import { AdminView } from '../../models/admin/admin-view.model';
import { LogView } from '../../models/admin/log-view.model';
import { RegisteredAccountUpdatedStatus } from '../../models/registered-account/registered-model-updated-status.model';
import { ApiResponse } from '../../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}/admin`;

  constructor(private httpClient: HttpClient) {}

  getAllAdmins(): Observable<ApiResponse<AdminView[]>> {
    return this.httpClient.get<ApiResponse<AdminView[]>>(
      `${this.apiUrl}/admins`
    );
  }

  getAdminById(adminId: string): Observable<ApiResponse<AdminView>> {
    return this.httpClient.get<ApiResponse<AdminView>>(
      `${this.apiUrl}/admins/${adminId}`
    );
  }

  getAllReports(): Observable<ApiResponse<ReportView[]>> {
    return this.httpClient.get<ApiResponse<ReportView[]>>(
      `${this.apiUrl}/reports`
    );
  }

  getReportById(reportId: number): Observable<ApiResponse<ReportView>> {
    return this.httpClient.get<ApiResponse<ReportView>>(
      `${this.apiUrl}/reports/${reportId}`
    );
  }

  getLogs(startDate: Date, endDate: Date): Observable<ApiResponse<LogView[]>> {
    const params = new HttpParams()
      .set('startDate', startDate.toISOString())
      .set('endDate', endDate.toISOString());

    return this.httpClient.get<ApiResponse<LogView[]>>(`${this.apiUrl}/logs`, {
      params,
    });
  }

  getRegisteredAccounts(): Observable<
    ApiResponse<RegisteredAccountShortView[]>
  > {
    return this.httpClient.get<ApiResponse<RegisteredAccountShortView[]>>(
      `${this.apiUrl}/accounts`
    );
  }

  getRegisteredAccountById(
    accountId: number
  ): Observable<ApiResponse<RegisteredAccountShortView>> {
    return this.httpClient.get<ApiResponse<RegisteredAccountShortView>>(
      `${this.apiUrl}/accounts/${accountId}`
    );
  }

  updateAccountStatus(
    status: RegisteredAccountUpdatedStatus
  ): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/accounts/status`, status);
  }
}
