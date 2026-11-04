import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ServiceCubos } from './services/service.cubos';
import { ServiceAuth } from './services/service.auth';
import { FormsModule } from '@angular/forms';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { AppRoutingModule } from './app-routing-module';
import { MarcaComponent } from './components/marca-component/marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { CompraComponent } from './components/compra-component/compra-component';
import { PedidoComponent } from './components/pedido-component/pedido-component';
import { RegistroComponent } from './components/registro-component/registro-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    MarcaComponent,
    LoginComponent,
    CuboComponent,
    PerfilComponent,
    CompraComponent,
    PedidoComponent,
    RegistroComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceCubos,
    ServiceAuth,
    provideHttpClient(withInterceptors([authTokenInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
