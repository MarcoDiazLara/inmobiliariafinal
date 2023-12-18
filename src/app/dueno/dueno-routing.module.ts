import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenoComponent } from './dueno.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NotificacionDuenoComponent } from './notificacion-dueno/notificacion-dueno.component';

const routes: Routes = [
  {
    path:'',
    component: DuenoComponent,
    children: [
      // {
      //   path:'Dueno',
      //   component: DuenoComponent,
      // },
      {
        path:'bienvenida',
        component: BienvenidaComponent,
      },
      { 
        path:'notificacion-dueno',
        component: NotificacionDuenoComponent,
      }

   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }
