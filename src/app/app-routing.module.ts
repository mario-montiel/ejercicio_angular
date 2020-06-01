import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Componentes Mario
import { LoginComponent } from './mario/login/login.component';
import { UsersComponent } from './mario/users/users.component';
import { UserDetailsComponent } from './mario/user-details/user-details.component';

// componentes del iony
import { ListarComponent } from './iony/listar/listar.component';
import { CrearComponent } from './iony/crear/crear.component';
import { EditarComponent } from './iony/editar/editar.component';
import { EliminarComponent } from './iony/eliminar/eliminar.component';

const routes: Routes = [
  // Rutas Mario
  {path: 'mario/login', component: LoginComponent },
  {path: 'mario/home', component: UsersComponent },
  {path: 'mario/user-details/:id', component: UserDetailsComponent },
  //rutas del iony
  {path: 'iony/listar', component: ListarComponent},
  {path: 'iony/crear', component: CrearComponent},
  {path: 'iony/editar', component: EditarComponent},
  {path: 'iony/eliminar', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
