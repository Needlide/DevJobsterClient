import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-redirect',
  template: '',
})
export class HomeRedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const role = this.authService.getUserRole();

    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard-admin']);
        break;
      case 'recruiter':
        this.router.navigate(['/dashboard-recruiter']);
        break;
      case 'user':
      default:
        this.router.navigate(['/dashboard-user']);
        break;
    }
  }
}
