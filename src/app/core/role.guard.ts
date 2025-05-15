import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRoles = route.data['roles'] as string[];
  const userRole = authService.getUserRole()?.toLowerCase();

  if (!userRole || !expectedRoles.includes(userRole)) {
    router.navigate(['/access-denied']);
    return false;
  }

  return true;
};
