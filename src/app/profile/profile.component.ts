import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any[] = [];
  data : any;
  username = 'Rahul586102';
  p:number = 1;
  itemsPerPage:number = 8;
  totalProduct:any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
  this.findProfile()
  }

  findProfile() {
    this.apiService.updateProfile(this.username);
    this.apiService.getUser(this.data).subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.apiService.getRepos(this.data).subscribe(repos => {
      console.log(repos);
      this.repos = repos;
      this.totalProduct = this.data.length;
    });
  }
  
}
