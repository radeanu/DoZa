import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class CanLoginGuard implements CanActivate {
  // constructor(private authService: AuthService, private router: Router) { }
  // canActivate(): boolean {
  //   if (!this.authService.currentUserValue) {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  //   return true;
  // }
}
