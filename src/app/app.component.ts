import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

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
      .map(res => res.json())
      .map((posts: Array<any>) => posts.slice(0, 10))
      .map((posts: Array<any>) => posts.map(post => post.id))
      .subscribe(id => console.log(id));
  }
}
