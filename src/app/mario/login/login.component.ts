import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://127.0.0.1:3000/authJWT', data,  {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .subscribe((response) => {
      if (response) {
      window.location.href =  'http://localhost:4200/mario/home';
      }
    });
  }

}
