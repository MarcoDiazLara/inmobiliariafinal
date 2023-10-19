import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes.component';
import { PerfilagentesComponent } from './perfilagentes/perfilagentes.component';
import { NotificacionesagentesComponent } from './notificacionesagentes/notificacionesagentes.component';
const routes: Routes = [
  {
    path:'',
    component:AgentesComponent,
    children: [ 
      {
        path:'Perfil',
        component: PerfilagentesComponent,
      },
      {
        path:'Notificaciones',
        component: NotificacionesagentesComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
