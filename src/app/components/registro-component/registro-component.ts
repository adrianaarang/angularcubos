import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from '../../services/service.auth';


@Component({
  selector: 'app-registro-component',
  standalone: false,
  styleUrl: './registro-component.css',
  templateUrl: './registro-component.html',
})
export class RegistroComponent {
  nombre = '';
  email = '';
password = '';
error = signal('');
enviando = signal(false);
constructor(private _auth: ServiceAuth, private _router: Router) {}

async registrar():Promise<void>{
  try {
      await this._auth.registrarAsync(this.nombre, this.email, this.password);
      this._router.navigate(['/login']);
    } catch (e) {
      console.error(e);
      this.error.set('No se pudo completar el registro');
    } finally {
      this.enviando.set(false);
    }
  }
}



