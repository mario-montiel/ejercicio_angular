import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
	id: 0;
	msgUserAdded = 0;
	objeto: any = [];
	algo: any = [];

  constructor(private rutaActiva: ActivatedRoute, private http: HttpClient, private router: Router) {
  	this.algo = router;
   }

  ngOnInit(): void {
  	this.id = this.rutaActiva.snapshot.params.id;
  }

  add(objeto){
  	const elid = this.id;
  	const ruta = 'http://127.0.0.1:3000/colorburger/editar/' + elid;
  	this.http.put(ruta, objeto)
    .subscribe((response) => {
      if (response){
        this.msgUserAdded = 1;
      }
      this.objeto = [];
      this.algo.navigate(['/iony/listar']);
    });
  }

}
