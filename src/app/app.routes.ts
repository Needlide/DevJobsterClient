import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AccessDeniedComponent } from './core/access-denied/access-denied.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { RegisterComponent } from './core/register/register.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';
import { authGuard } from './core/auth.guard';
import { roleGuard } from './core/role.guard';
import { AccountReviewPageComponent } from './core/account-review-page/account-review-page.component';
import { ReportReviewComponent } from './core/report-review/report-review.component';
import { AppliedJobsComponent } from './core/applied-jobs/applied-jobs.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { RecruiterProfileComponent } from './core/recruiter-profile/recruiter-profile.component';
import { ApplicantsComponent } from './core/applicants/applicants.component';
import { ProfileComponent } from './core/profile/profile.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'applied-jobs',
    component: AppliedJobsComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['user'] },
  },
  {
    path: 'account-details/:userId',
    component: AccountReviewPageComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'report-detail',
    component: ReportReviewComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
  },
  {
    path: 'applicants',
    component: ApplicantsComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['recruiter'] },
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard, roleGuard],
  },
  { path: '**', component: NotFoundComponent },
];
