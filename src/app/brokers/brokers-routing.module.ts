import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersComponent } from './brokers.component';
import { NotificacionbrokerComponent } from './notificacionbroker/notificacionbroker.component';
import { PerfilbrokersComponent } from './perfilbrokers/perfilbrokers.component';
import { AltaAsesorComponent } from './alta-asesor/alta-asesor.component';
import { BrokersAsignarReasignarComponent } from './brokers-asignar-reasignar/brokers-asignar-reasignar.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { InventarioagentesComponent } from '../agentes/inventarioagentes/inventarioagentes.component';
import { InvesntarioComponent } from './invesntario/invesntario.component';
import { CatalogoinmuebleComponent } from './catalogoinmueble/catalogoinmueble.component';


const routes: Routes = [




  {
    path: '',
    component: BrokersComponent,
    children: [

      {
        path: 'perfil',
        component: PerfilbrokersComponent,
      },
      {
        path: 'notificacionbroker',
        component: NotificacionbrokerComponent,
      },
      {
        path: 'Alta',
        component: AltaAsesorComponent,
      },
      {
        path: 'asignar-reasignar',
        component: BrokersAsignarReasignarComponent,
      },
      {
           path:'calendario',
           component:CalendarioComponent,
      },
    {

           path:'invesntario',
           component:InvesntarioComponent,

    },
     {
      path:'catalogoinmueble',
      component:CatalogoinmuebleComponent
     }
     
    ]
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule { }
