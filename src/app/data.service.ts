import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:3000/users');
  }
}
