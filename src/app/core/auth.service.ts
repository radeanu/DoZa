import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

import { FormLogin } from '@shared/types';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(data: FormLogin): Observable<any> {
    return this.http.post<{ token: string }>(API_URL + '/api/auth', data).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

  signUp(data: FormLogin): Observable<any> {
    return this.http.post<{ token: string }>(API_URL + '/api/sign-up', data).pipe(
      map(result => {
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  get getToken(): string {
    return localStorage.getItem('access_token');
  }

  get loggedIn(): boolean {
    const token = this.getToken;
    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }
}
