import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import { Pedido } from '../models/pedido';

@Injectable()
export class ServiceAuth {
  private apiUrl = environment.urlApi;
  private tokenkey = "TOKEN";

 private _token = signal<string | null>(sessionStorage.getItem(this.tokenkey));
  public token = this._token.asReadonly();

  constructor(private _http: HttpClient) {}

 isLoggedIn(): boolean {
    return this._token() !== null;
  }

  async loginAsync(email: string, password: string): Promise<void> {
    const response = await firstValueFrom(
      this._http.post<{ response: string }>(this.apiUrl + 'api/Manage/Login', { email, password })
    );
    sessionStorage.setItem(this.tokenkey, response.response);
    this._token.set(response.response);
  }

  logOut(): void {
    sessionStorage.removeItem(this.tokenkey);
    this._token.set(null);
  }

  async getPerfilAsync(): Promise<Usuario> {
    return await firstValueFrom(
      this._http.get<Usuario>(this.apiUrl + 'api/Manage/PerfilUsuario')
    );

  }

  async getComprasAsync(): Promise<Pedido[]> {
    return await firstValueFrom(
      this._http.get<Pedido[]>(this.apiUrl + 'api/Compra/ComprasUsuario')
    );
  }

  async insertarPerdidoAsync(idCubo: number): Promise<void>{
    await firstValueFrom(
      this._http.post(this.apiUrl + 'api/Compra/InsertarPedido/' + idCubo, '', {
        responseType: 'text',
      })
    );
  }

  async registrarAsync(nombre: string, email:string, pass:string): Promise<void>{
    await firstValueFrom(
      this._http.post(this.apiUrl + 'api/Manage/RegistroUsuario', {nombre, email, pass}, {
        responseType: 'text',
      })
    );
  }

  


  }
