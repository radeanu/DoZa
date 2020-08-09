import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppAuthRoutingModule } from './routes/auth/auth.routing.module';

// import { AuthGuard } from './core/auth.guard';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login-component/login.component';
// import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'sign-up', component: LoginComponent },
  // { path: 'cars', component: CarsComponent, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./routes/auth/auth.module').then(m => m.AppAuthModule) },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
