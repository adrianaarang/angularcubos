import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from '../../services/service.auth';


@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})

export class LoginComponent {
email = '';
password = '';
error = signal('');

  constructor(private _auth: ServiceAuth, private _router: Router) {}

  async login():Promise<void>{
    try{
      await this._auth.loginAsync(this.email, this.password);
    } catch (error) {
      this.error.set('Error al iniciar sesión');
    }
    this._router.navigate(['/']);

  }

}
