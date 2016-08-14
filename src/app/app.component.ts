import { Component, OnInit } from '@angular/core';
import { GithubService, Post, PostsService } from "./shared";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  posts: Array<Post>;
  repos: Array<any>;
  errorMessage: string;
  createdPost: Post;

  constructor(private postsService: PostsService, private githubService: GithubService) { }

  ngOnInit() {
    this.postsService.getPosts()
                     .subscribe(posts => this.posts = posts,
                                error => this.errorMessage = <any>error);
  }

  createPost() {
    let post = new Post("My title", "My body", 1);
    this.postsService.addPost(post)
                     .subscribe(post => this.createdPost = post,
                                error => this.errorMessage = <any>error);
  }

  getRepos(orgName: string) {
    this.githubService.listRepos(orgName)
                      .subscribe(repos => this.repos = repos,
                                 error => this.errorMessage = <any>error);
  }
}
