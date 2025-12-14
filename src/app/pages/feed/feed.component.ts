import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-feed',
  standalone: true,
  templateUrl: './feed.html',
  styleUrls: ['./feed.css'],
  imports: [CommonModule, FormsModule]
})
export class FeedComponent implements OnInit {

  posts: any[] = [];
  commentText: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadFeed();
  }

 loadFeed() {
  this.api.getFeed().subscribe((res: any) => {
    this.posts = res.map((p: any) => ({
      ...p,
      likedByMe: false,
      likeCount: p.likeCount || 0,
      comments:[],
      commentText:''
    }));   this.posts.forEach((p: any) => {
      this.loadComments(p);
    });
  });
}

likePost(post: any) {
  this.api.likePost(post.id).subscribe(() => {
    post.likedByMe = true;
    post.likeCount++;
  });
}
unlikePost(post: any) {
  this.api.unlikePost(post.id).subscribe(() => {
    post.likedByMe = false;
    post.likeCount--;
  });
}
  loadComments(postId: number) {
  const post = this.posts.find((p: any) => p.id === postId);
  if (!post) return;

  this.api.getComments(postId).subscribe((res: any) => {
    post.comments = res;
  });
}

addComment(post: any) {
  if (!post.commentText) return;

  this.api.addComment(post.id, post.commentText).subscribe(() => {
    post.commentText = '';
    this.loadComments(post); 
  });
}

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}
