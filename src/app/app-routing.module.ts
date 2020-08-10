import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/home/home.module').then((m) => m.AppHomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./routes/auth/auth.module').then((m) => m.AppAuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routes/dashboard/dashboard.module').then(
        (m) => m.AppDashboardModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
