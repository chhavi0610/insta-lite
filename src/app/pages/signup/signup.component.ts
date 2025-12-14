import { Component } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
    imports: [CommonModule, FormsModule]
})
export class SignupComponent {

  signupData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private api: ApiService) {}

  signup() {
    this.api.signup(this.signupData).subscribe(
      () => {
        alert('Signup successful');
        window.location.href = '/';
      },
      (err) => {
        console.log(err);
        alert('Signup failed');
      }
    );
  }
}
