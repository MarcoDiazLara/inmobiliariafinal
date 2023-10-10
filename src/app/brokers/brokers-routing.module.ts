import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersComponent } from './brokers.component';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { ReasignarasesoresComponent } from './reasignarasesores/reasignarasesores.component';
import { AgendarcitaComponent } from './agendarcita/agendarcita.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';

const routes: Routes = [

   


  {
    path:'',
    component:BrokersComponent,
    children:[

      {
           path:'perfil',
           component:PerfilbrokersComponent,


      },
      {
        path: 'notificacionbroker',
        component: NotificacionbrokerComponent,
      },

      {
        path:'prospectos',
        component:ProspectosComponent,
      },

      {

       path:'reasignarasesores',
           component:ReasignarasesoresComponent,
      },
      {
          path:' Agendarcita ',
          component:AgendarcitaComponent,

      }


    ]
  },


  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule { }
