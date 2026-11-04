import { Component, OnInit, signal } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServiceAuth } from '../../services/service.auth';



@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  user = signal<Usuario | null>(null);

  constructor(private _auth: ServiceAuth) {}

  async ngOnInit(): Promise<void> {
    this.user.set(await this._auth.getPerfilAsync());

  }
}
