import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantsService } from '../../common/global-constants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    // console.log(GlobalConstantsService.pruebon);
  }

  onSubmit(data){
    console.log(data);
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://127.0.0.1:3000/authJWT', data,  {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST'
      }
    })
    .subscribe((response) => {
      console.log(response);
      if (response) {
        GlobalConstantsService.session = response;
        if (GlobalConstantsService.session) {
          this.router.navigate(['mario/home']);
        }
      }
    });
  }

}
