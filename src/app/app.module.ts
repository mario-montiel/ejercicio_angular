import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './componets/users/crud/crud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './mario/login/login.component';
import { UserDetailsComponent } from './mario/user-details/user-details.component';
import { UsersComponent } from './mario/users/users.component';
import { GlobalConstantsService } from './common/global-constants.service';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    LoginComponent,
    UserDetailsComponent,
    UsersComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
