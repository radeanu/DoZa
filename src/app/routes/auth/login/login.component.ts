import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { ResponsiveService } from '@shared/services';
import { SnakBarService } from '@shared/helpers';
import { FormLogin } from '@shared/types';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  isLoginUrl = true;
  isMobile: boolean;
  curentRoute: string;
  loginPath = 'auth/login';
  signUpPath = 'auth/sign-up';

  constructor(
    private responsiveService: ResponsiveService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snakBarService: SnakBarService,
  ) {
    // if (this.authService.loggedIn) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.onResize();
    this.curentRoute = this.route.snapshot.routeConfig.path;
  }

  onResize(): void {
    this.isMobile = this.responsiveService.checkWidth();
  }

  logUser(data: FormLogin): void {
    this.authService.login(data).pipe(first())
      .subscribe(
        _ => this.router.navigate(['cars']),
        _ => this.snakBarService.open('BAD_AUTH', 'CLOSE_BUTTON', 3000)
      );
  }

  signUpUser(data: FormLogin): void {
    console.log(data);

    this.authService.signUp(data).pipe(first())
      .subscribe(
        _ => this.router.navigate(['cars']),
        _ => this.snakBarService.open('BAD_SIGN_UP', 'CLOSE_BUTTON', 3000)
      );
  }

  checkRedirectUrl(isLoginUrl: boolean): void {
    this.isLoginUrl = isLoginUrl;
  }

  redirectUser(link: string): void {
    this.router.navigate([link]);
  }

  restorePass(): void {
    console.log('passs restore');

  }
}
