import { Component } from '@angular/core';
import { ApiService } from '../../services/api.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
      imports: [CommonModule, FormsModule, RouterModule ]
  
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private api: ApiService) {}

  login() {
    this.api.login(this.loginData).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        window.location.href = '/feed';
      },
      (err) => {
        alert('Invalid login');
      }
    );
  }
}
