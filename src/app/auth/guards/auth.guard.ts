import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';


const checkStatus = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isAuthenticated()
  .pipe(
    tap(authenticated => {
      if (!authenticated) {
        router.navigateByUrl('/auth/login')
      }
    })
  );
}

export const authGuard: CanActivateFn = (route, state) => {

  return checkStatus()
 
};

