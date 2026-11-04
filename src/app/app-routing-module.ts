import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './components/marca-component/marca-component';
import { LoginComponent } from './components/login-component/login-component';
import { RegistroComponent } from './components/registro-component/registro-component';
import { authGuard } from './guards/auth-guard';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import {CompraComponent} from './components/compra-component/compra-component';
import { PedidoComponent } from './components/pedido-component/pedido-component';
import { InformePdfComponent } from './components/informe-pdf-component/informe-pdf-component';



const routes: Routes = [

  {path: 'marcas/:marca', component:MarcaComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
  { path: 'compras', component: CompraComponent, canActivate: [authGuard] },
  {path: 'pedidos', component: PedidoComponent, canActivate: [authGuard]},
  {path:'informe-pdf', component: InformePdfComponent, canActivate: [authGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
