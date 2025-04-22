import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AccessDeniedComponent } from './core/access-denied/access-denied.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'recruiter',
  //   component: RecruiterComponent,
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { roles: ['recruiter'] },
  // },
  // {
  //   path: 'admin',
  //   component: AdminPanelComponent,
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { roles: ['admin'] },
  // },
  // {
  //   path: 'user',
  //   component: UserDashboardComponent,
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: { roles: ['user'] },
  // },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
