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
import { ShowComponent } from './iovanna/show/show.component';
//import { AddComponent } from './iovanna/add/add.component';
import { DeleteComponent } from './iovanna/delete/delete.component';
import { UpdateComponent } from './iovanna/update/update.component';

const routes: Routes = [
  // Rutas Mario
  { path: 'mario/login', component: LoginComponent },
  { path: 'mario/home', component: UsersComponent },
  { path: 'mario/user-details/:id', component: UserDetailsComponent },
  //rutas del iony
  { path: 'iony/listar', component: ListarComponent },
  { path: 'iony/crear', component: CrearComponent },
  { path: 'iony/editar', component: EditarComponent },
  { path: 'iony/eliminar', component: EliminarComponent },

  //IOVANNA RUTAS
  { path: 'iovanna/show', component: ShowComponent },
  //{ path: 'iovanna/add', component: AddComponent },
  { path: 'iovanna/update', component: UpdateComponent },
  { path: 'iovanna/delete', component: DeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
