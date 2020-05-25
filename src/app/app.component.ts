import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'client';
  onSubmit(data){
    this.http.post('http://127.0.0.1:3000/authJWT', data)
    .subscribe((response) => {
      console.warn(response);
    });
    console.warn(data);
  }
}
