import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantsService } from '../../common/global-constants.service';
import { Router } from '@angular/router';
import { Dog } from '../../models/Dog';
//import { CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  dogs: Dog;
  getDog = 'http://127.0.0.1:3000/api/test/dogs';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getDogs().subscribe((data) => {
      this.dogs = data;
      console.log(data);
    });
  }
  getDogs() {
    return this.http.get<Dog>(this.getDog);
  }
}
