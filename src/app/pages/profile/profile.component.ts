import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.services';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
user: any = {};
  users: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadProfile();
    this.loadUsers();
  }
 loadProfile() {
    this.api.getMyProfile().subscribe((res: any) => {
      this.user = res;
    });
  }
  loadUsers() {
    this.api.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
follow(u: any) {
  this.api.followUser(u.id).subscribe(() => {
    alert('User followed');
    u.isFollowing = true;
    this.loadProfile();   
  });
}
unfollow(u: any) {
  this.api.unfollowUser(u.id).subscribe(() => {
    alert('User unfollowed');
    u.isFollowing = false;
    this.loadProfile();  
  });
}

}
