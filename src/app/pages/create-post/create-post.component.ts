import { Component } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  standalone: true,
  templateUrl: './create-post.html',
  styleUrls: ['./create-post.css'],
  imports: [CommonModule, FormsModule],
})
export class CreatePostComponent {

  postData = {
    image_url: '',
    caption: ''
  };

  constructor(private api: ApiService) {}

  createPost() {
    this.api.createPost(this.postData).subscribe(
      () => {
        alert('Post created');
        window.location.href = '/feed';
      },
      () => {
        alert('Error creating post');
      }
    );
  }
}
