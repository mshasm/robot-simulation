import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUsername: string = '';
  registerPassword: string = '';
  message: string = '';

  constructor(private router: Router) {}

  registerUser() {
    if (this.registerUsername && this.registerPassword) {
      this.message = 'User registered successfully!';
      setTimeout(() => {
        this.router.navigate(['/login']); // Redirect to login page
      }, 2000);
    } else {
      this.message = 'Please enter a username and password.';
    }
  }
}


