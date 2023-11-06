import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersComponent } from './brokers.component';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { ReasignarasesoresComponent } from './reasignarasesores/reasignarasesores.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';
import { AltaAsesorComponent } from './alta-asesor/alta-asesor.component';

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

       path:'reasignarasesores',
           component:ReasignarasesoresComponent,
      },
      {

        path:'Alta',
            component:AltaAsesorComponent,
       },
    ]
  },


  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule { }
