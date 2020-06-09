import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ 
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  /*login(user: any): Observable<any> {
    return this.request('post', 'login', user);
  }*/
  getToken() {
    return this.cookies.get("token");
  }
  hasTokem(): boolean {
    var token = this.cookies.get('token');
    if (token == null || token == '') {
      return false;
    }
    return true;
  }
}
