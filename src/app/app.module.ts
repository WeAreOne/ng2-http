import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';

import { GithubService, PostsService } from "./shared";

@NgModule({
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  bootstrap:    [ AppComponent ],
  providers: [ PostsService, GithubService ]
})
export class AppModule {}
