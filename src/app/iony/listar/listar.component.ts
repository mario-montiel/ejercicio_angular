import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colorburger } from '../../models/Colorburger';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalConstantsService } from '../../common/global-constants.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colorburgers: Colorburger;
  msgUserDeleted = 0;
  colorb: any = [];

  constructor(private http: HttpClient, private router: Router) { }


  getColorburgers() {
    return this.http.get<Colorburger>('http://127.0.0.1:3000/colorburger/tabla');
  }

  ngOnInit(): void {
    this.getColorburgers().subscribe(data => {
      this.colorburgers = data;
      console.log(data);
    });
  }
  eliminar(objeto) {
    this.http.delete('http://127.0.0.1:3000/colorburger/eliminar/' + objeto)
      .subscribe((response) => {
        if (response) {
          this.msgUserDeleted = 1;
        }
        this.colorb = [];
        this.getColorburgers();
      });
  }

}