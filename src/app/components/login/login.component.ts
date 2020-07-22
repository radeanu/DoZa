import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { ResponsiveService } from '@shared/services';
import { SnakBarService } from '@shared/helpers';
import { FormLogin } from '@shared/types';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isMobile: boolean;
  error: string;

  constructor(
    private responsiveService: ResponsiveService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snakBarService: SnakBarService
  ) {
    // if (this.authService.loggedIn) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.onResize();
  }

  onResize(): void {
    this.isMobile = this.responsiveService.checkWidth();
  }

  logUser(data: FormLogin): void {
    this.authService.login(data).pipe(first())
      .subscribe(
        _ => this.router.navigate(['cars']),
        error => this.snakBarService.open('Could not authenticate', 'Close')
      );
  }
}
