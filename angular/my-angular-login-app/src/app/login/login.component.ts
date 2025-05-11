import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  loginUser() {
    if (this.username && this.password) {
      this.message = 'Login Successful!';
      setTimeout(() => {
        this.router.navigate(['/welcome']); // Redirect after login
      }, 2000);
    } else {
      this.message = 'Please enter a username and password.';
    }
  }
}


