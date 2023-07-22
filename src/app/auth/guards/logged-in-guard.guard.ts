import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

const checkStatus = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isAuthenticated()
                    .pipe(
                      tap(isLogged => {
                        console.log({isLogged})
                        if (isLogged) {
                          router.navigateByUrl('/agenda/home')
                        }
                      }),
                      map(isLogged => !isLogged)
                    )

}

export const loggedInGuardGuard: CanActivateFn = (route, state) => {


  return checkStatus();
};
