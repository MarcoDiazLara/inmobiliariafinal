import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { NotificacionesclienteComponent } from './notificacionescliente/notificacionescliente.component';
import { SeguimientoclienteComponent } from './seguimientocliente/seguimientocliente.component';
import { AgendarcitaclienteComponent } from './agendarcitacliente/agendarcitacliente.component';
import { CambioasesorclienteComponent } from './cambioasesorcliente/cambioasesorcliente.component';
import { PerfilclienteComponent } from './perfilcliente/perfilcliente.component';

const routes: Routes = [
  {
    path: '',
    component:ClienteComponent,
    children: [
      {
        path:'Perfil',
        component: PerfilclienteComponent,
      },
      {
        path:'notificacion',
        component: NotificacionesclienteComponent,
      },
      {
        path:'seguimiento',
        component: SeguimientoclienteComponent,
      },
      {
        path:'agendacita',
        component: AgendarcitaclienteComponent,
      },
      {
        path:'reasignacion',
        component: CambioasesorclienteComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
