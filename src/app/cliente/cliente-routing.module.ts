import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { WebComponent } from '../web/web.component';

const routes: Routes = [

  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  
  {
    path: 'cliente',
    component:ClienteComponent,
    children: [
      {
        path: 'inmueble',
        component: InmueblesComponent,
      },
      {
        path:'clientePerfil',
        component: PerfilComponent,
      },
      {
        path:'seguimiento',
        component: SeguimientoComponent,
      },
      {
        path:'notificaciones',
        component: NotificacionesComponent,
      },
    ],
  },
  {
    path: "index",
    component: WebComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
