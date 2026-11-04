import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/service.cubos';


@Component({
  selector: 'app-marca-component',
  standalone: false,
  styleUrl: './marca-component.css',
  templateUrl: './marca-component.html',
})
export class MarcaComponent implements OnInit {
  marca = signal("");
  cubos = signal<Cubo[]>([]);
  cuboFavorito= signal <Cubo | null>(null);
  constructor(
    private _route: ActivatedRoute,
    private _service: ServiceCubos
  ) {}

  seleccionarFavorito(cubo:Cubo): void{
    this.cuboFavorito.set(cubo);
    
  }
  ngOnInit(): void {
    this._route.params.subscribe(async (params) =>{
      this.marca.set(params['marca']);
      this.cubos.set(await this._service.getCubosMarcasAsync(params['marca']));

    })

  }

}
