import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { GlobalConstantsService } from '../../common/global-constants.service';
import {Router} from '@angular/router';

const url = 'http://127.0.0.1:3000/users';

// let usr = User;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any = [];
  msgUserAdded = 0;
  msgUserEdited = 0;
  msgUserDeleted = 0;
  usertochange: any = {};
  username = null;

  constructor(private http: HttpClient, private router: Router) {
   }

  ngOnInit(): void {
    this.username = GlobalConstantsService.session.user;
    return this.getUsers();
  }

  getUsers(){
    this.http.get('http://127.0.0.1:3000/users')
    .subscribe((response) => {
      console.log(response)
      this.user = [];
      for (const u of (response as any)) {
        this.user.push({
          id: u.id,
          name: u.name,
          email: u.email
        });
      }
    });
  }

  add(user) {
    this.http.post('http://127.0.0.1:3000/add-user-post', user)
    .subscribe((response) => {
      if (response){
        this.msgUserAdded = 1;
      }
      this.user = [];
      this.getUsers();
    });
  }

  fillDataUpdate(user){
    if (user) {
      document.getElementById('form-edit-user').style.opacity = '1';
    }
    else{
      document.getElementById('form-edit-user').style.opacity = '0.5';
    }
    this.usertochange = user;
  }

  update(user){
    this.http.post('http://127.0.0.1:3000/update-user/' + this.usertochange.id, user)
    .subscribe((response) => {
      if (response){
        this.msgUserEdited = 1;
      }
      this.user = [];
      this.getUsers();
      this.usertochange = {};
    });
  }

  delete(user){
    this.usertochange = user;
    const alert = confirm(`¿Está seguro de querer eliminar al usuario ${user.name}?`);
    if (alert){
      this.http.post('http://127.0.0.1:3000/delete-user/' + this.usertochange.id, '')
      .subscribe((response) => {
        if (response){
          this.msgUserDeleted = 1;
        }
        this.usertochange = {};
        this.user = [];
        this.getUsers();
      });
    }
  }

  logout() {
    console.log('logout');
    console.warn('xx');
    this.http.post('http://127.0.0.1:3000/logout', '')
      .subscribe((response) => {
        console.log(response);
        GlobalConstantsService.session = {};
        this.router.navigate(['mario/login']);
      });
  }

}
