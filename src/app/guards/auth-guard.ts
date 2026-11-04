import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServiceAuth } from '../services/service.auth';

// Si no hay token, redirige al login
export const authGuard: CanActivateFn = () => {
  const auth = inject(ServiceAuth);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.createUrlTree(['/login']);
};
