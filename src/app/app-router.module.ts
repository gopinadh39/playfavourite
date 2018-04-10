import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/Components/login/login.component';
import { SignupComponent } from '../app/Components/signup/signup.component';
import {AppComponent} from '../app/app.component'

const appRoutes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: "full"},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  // { path: 'dashboard', component:}

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);