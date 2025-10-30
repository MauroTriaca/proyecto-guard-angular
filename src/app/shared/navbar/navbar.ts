import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar{
  authService = inject(AuthService);

  router = inject(Router);

  logInLogOut() {
    if (!this.authService.estoyLogeado()) {
      this.router.navigateByUrl('login');
    }
    else{
      this.authService.logOut();
      this.router.navigateByUrl('home');
    }
  }


  
}
