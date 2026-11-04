import { Component, OnInit, signal } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { ServiceAuth } from '../../services/service.auth';

@Component({
  selector: 'app-compra-component',
  standalone: false,
  styleUrl: './compra-component.css',
  templateUrl: './compra-component.html',
})
export class CompraComponent {
  pedidos = signal<Pedido[]>([]);
  constructor(private _auth: ServiceAuth) {}

  async ngOnInit(): Promise<void> {
    this.pedidos.set(await this._auth.getComprasAsync());
  }
}
