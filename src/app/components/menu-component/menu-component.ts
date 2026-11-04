import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubos } from '../../services/service.cubos';
import { ServiceAuth } from '../../services/service.auth';



@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit{
marcas = signal<string[]>([]);

  constructor(
    private _cubos: ServiceCubos,
      private _router: Router,
      public _auth: ServiceAuth,
  ){}

  async ngOnInit(): Promise<void>{
    this.marcas.set(await this._cubos.getMarcasAsync());
  }
logOut(): void{
  this._auth.logOut();
  this._router.navigate(['/login']);
}



}
