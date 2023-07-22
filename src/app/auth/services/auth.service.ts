import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IRespuestaAutenticacion } from '../interface/respuesta-autenticacion';
import { ICredencialesAutenticacion } from '../interface/credenciales-autenticacion';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL: string = environment.baseUrl
  constructor(private http: HttpClient, private jwtHellper: JwtHelperService) { }


  login(credenciales: ICredencialesAutenticacion): Observable<IRespuestaAutenticacion>{
    return this.http.post<IRespuestaAutenticacion>(`${this.baseURL}/auth/login`, credenciales)
                    .pipe(
                      tap((res) => localStorage.setItem('ACCESS_TOKEN', res.token))
                    )
  }


  isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem('ACCESS_TOKEN')
    if (!token) {
      return of(false)
    }

    return of(!this.jwtHellper.isTokenExpired(token))
  }

}
