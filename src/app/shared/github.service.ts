import { Injectable } from "@angular/core";
import { Jsonp, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class GithubService {
  apiUrl: string = 'https://api.github.com';

  constructor(private jsonp: Jsonp) { }

  listRepos(orgName: string): Observable<any> {
      return this.jsonp.get(this.apiUrl + '/orgs/' + orgName + '/repos?callback=JSONP_CALLBACK')
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json().data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
