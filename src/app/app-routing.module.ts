import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Componentes Mario
import { LoginComponent } from './mario/login/login.component';
import { UsersComponent } from './mario/users/users.component';
import { UserDetailsComponent } from './mario/user-details/user-details.component';

const routes: Routes = [
  // Rutas Mario
  {path: 'mario/login', component: LoginComponent},
  {path: 'mario/home', component: UsersComponent},
  {path: 'mario/user-details/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
