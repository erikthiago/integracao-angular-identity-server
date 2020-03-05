import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginCallbackComponent } from './base/auth/login-callback.componenet';
import { HomeComponent } from './base/components/home/home.component';
import { AuthGuard } from './base/auth/auth.guard';
import { HomeUnlockedComponent } from './base/components/home-unlocked/home-unlocked.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-unlocked', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },

  {
    path: 'home-unlocked', component: HomeUnlockedComponent
  },
  {
    path: 'login-callback',
    component: LoginCallbackComponent,
  },
  // Handle all other routes
  { path: '**', redirectTo: 'home-unlocked' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
