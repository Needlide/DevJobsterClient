import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isUser: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    let role = this.authService.getUserRole();

    if (role == 'user') this.isUser = true;
    else this.isUser = false;
  }
}
