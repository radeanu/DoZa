import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { ResponsiveService } from '@shared/services';
// import { SnackBarService } from '@shared/helpers';
import { FormLogin } from '@shared/types';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  error: string;
  isLoginUrl = true;
  isMobile: boolean;
  currentRoute: string;
  loginPath = 'auth/login';
  signUpPath = 'auth/sign-up';

  constructor(
    private responsiveService: ResponsiveService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) // private snackBarService: SnackBarService
  {
    // if (this.authService.loggedIn) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.onResize();
    this.currentRoute = this.route.snapshot.routeConfig.path;
  }

  onResize(): void {
    this.isMobile = this.responsiveService.checkWidth();
  }

  logUser(data: FormLogin): void {
    this.authService
      .login(data)
      .pipe(first())
      .subscribe(
        (_) => this.router.navigate(['cars']),
        (_) => console.log('Error login')
      );
  }

  signUpUser(data: FormLogin): void {
    console.log(data);

    this.authService
      .signUp(data)
      .pipe(first())
      .subscribe(
        (_) => this.router.navigate(['cars']),
        (_) => console.log('Error sign-up')
      );
  }

  checkRedirectUrl(isLoginUrl: boolean): void {
    this.isLoginUrl = isLoginUrl;
  }

  redirectUser(link: string): void {
    this.router.navigate([link]);
  }

  restorePass(): void {
    console.log('pass restore');
  }
}
