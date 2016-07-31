import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { Post } from "./index";

@Injectable()
export class PostsService {
  apiUrl: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.apiUrl + '/posts')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  addPost(post: Post): Observable<Post> {
    return this.http.post(this.apiUrl + '/posts', JSON.stringify(post))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
