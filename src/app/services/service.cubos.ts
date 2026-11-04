import {environment} from '../../environments/environment';

import {Cubo} from '../models/cubo';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable()
export class ServiceCubos{
  private apiUrl = environment.urlApi;

  constructor(private _http: HttpClient){}

  async  getCubosAsync(): Promise<Cubo[]>{
  return await firstValueFrom(this._http.get<Cubo[]>(this.apiUrl + 'api/Cubos'));
}
  async getCuboAsync(idCubo: number): Promise<Cubo>{
  return await firstValueFrom(this._http.get<Cubo>(this.apiUrl + 'api/Cubos/' + idCubo));
}

async getCubosMarcasAsync(marca: string): Promise<Cubo[]> {
   return await firstValueFrom(this._http.get<Cubo[]>(this.apiUrl + 'api/Cubos/CubosMarca/' + marca));
}

async getMarcasAsync(): Promise<string[]>{
  return await firstValueFrom(this._http.get<string[]>(this.apiUrl + 'api/Cubos/Marcas'));
}



}
