import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';
import { ServiceAuth } from '../../services/service.auth';


@Component({
  selector: 'app-pedido-component',
  standalone: false,
  styleUrl: './pedido-component.css',
  templateUrl: './pedido-component.html',
})
export class PedidoComponent implements OnInit {
  cubos= signal<Cubo[]>([]);
  idCubo: number | null = null;
  enviado = signal(false);
  error = signal ('');

  constructor(
    private _cubos: ServiceCubos,
    private _auth: ServiceAuth,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.cubos.set(await this._cubos.getCubosAsync());
  }

  async createPedido(): Promise<void>{
    if(this.idCubo === null) return;
    this.enviado.set(true);
    this.error.set('');
    try{
      await this._auth.insertarPerdidoAsync(this.idCubo!);
      this._router.navigate(['/compras']);

    }catch (error){
      console.error(error);
      this.error.set("errror al hacer el pedido");


    } finally{
      this.enviado.set(false);

  }



  }
  }
  
