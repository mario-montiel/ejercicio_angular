import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstantsService } from './common/global-constants.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  username = GlobalConstantsService.session;
  constructor(private http: HttpClient, private dataSvc: DataService) {}

  logout() {
    this.http.get('logout')
    .subscribe((response) => {
      console.log(response);
    });
  }
}
