import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
	msgUserAdded = 0;
	objeto: any = [];
	algo: any = [];

  constructor(private http: HttpClient, private router: Router) {
  	this.algo = router;
   }

  ngOnInit(): void {
  }

  add(objeto){
  	this.http.post('http://127.0.0.1:3000/colorburger/nuevo', objeto).subscribe((response) => {
  		if (response){
  			this.msgUserAdded = 1;
  		}
  		this.objeto = [];
  		this.algo.navigate(['/iony/listar']);
    });
  }
}
