import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    var credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe({
      next: (res) => {
        this.authService.storeToken(res.data.token);
        const role = this.authService.getUserRole();
        switch (role?.toLocaleLowerCase()) {
          case 'admin':
            this.router.navigate(['/dashboard']);
            break;
          case 'recruiter':
            this.router.navigate(['/recruiter']);
            break;
          default:
            this.router.navigate(['/user']);
        }
      },
      error: () => {
        alert('Login failed');
      },
    });
  }
}
