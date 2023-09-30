import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { CambiopasswordComponent } from './ventanaemergente/cambiopassword/cambiopassword.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CambiopasswordComponent,
    SeguimientoComponent,
    NotificacionesComponent,
    InmueblesComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
