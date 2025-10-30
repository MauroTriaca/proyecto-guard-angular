import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);
  
  form = this.fb.group({
    username: [(''), [Validators.required]],
    password: [(''), [Validators.required]]
  }) 

  loginUser(){
    if(this.form.invalid || !this.authService.checkUserExists(this.form.value)){ 
      return;
    }
    console.log("Formulario validado:", this.form.value);
    //agregamos al localStorage el usuario logeado
    localStorage.setItem('loggedUser', JSON.stringify(this.form.value));
    //redireccionamos a la pagina de admin
    this.router.navigateByUrl('admin');
    //ahora le tengo que cambiar el boton del navbar a logout
    this.authService.logIn();
    console.log(this.authService.estoyLogeado());
    
    
  }
}
