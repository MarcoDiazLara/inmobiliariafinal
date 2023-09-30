import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { InmuebleComponent } from '../inmueble/inmueble.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CambiopasswordComponent } from './ventanaemergente/cambiopassword/cambiopassword.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
const routes: Routes = [
  {
    path: '',
    component:ClienteComponent,
    children: [
      {
          path: 'usuario',
          component: InmuebleComponent,
      },
      {
        path:'perfil',
        component: PerfilComponent,
      },

      {
        path:'password',
        component: CambiopasswordComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
