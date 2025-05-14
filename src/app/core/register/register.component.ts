import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email = '';
  password = '';
  userType: 'user' | 'recruiter' = 'user';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    if (!this.email || !this.password) return;

    const credentials = {
      email: this.email,
      password: this.password,
    };

    this.authService.register(credentials, this.userType).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => console.error('Registration failed', err),
    });
  }
}
