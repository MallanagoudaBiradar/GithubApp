import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface GithubRepository {
  id: number;
  name: string;
  // Add other properties you want to access from the GitHub API response
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private username: any;
  private clientId: any;
  private clientSecret: any;

  constructor(private httpClient: HttpClient) {
    this.username = 'Rahul586102';
    this.clientId = '418192';
    this.clientSecret = 'Iv1.4e2735adc8f855ba';
  }

  getUser(githubUsername: string): Observable<any> {
    const url = `https://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    return this.httpClient.get(url);
  }

  getRepos(githubUsername: string): Observable<GithubRepository[]> {
    const url = `https://api.github.com/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    return this.httpClient.get<GithubRepository[]>(url);
  }
  updateProfile(username:string){
  	this.username = username;
  }
}
