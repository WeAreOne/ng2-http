import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  apiUrl: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get(this.apiUrl + '/posts')
      .subscribe((response: Response) => {
        console.log('Status: '+ response.status);
        console.log(response.headers);
        console.log(response.headers.get('Content-Type'));
        console.log(response.json());
      });
  }
}
