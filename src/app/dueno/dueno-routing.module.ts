import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenoComponent } from './dueno.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NotificacionDuenoComponent } from './notificacion-dueno/notificacion-dueno.component';
import { InteresadosComponent } from './interesados/interesados.component';
import { MiAsesorComponent } from './mi-asesor/mi-asesor.component';

const routes: Routes = [
  {
    path: '',
    component: DuenoComponent,
    children: [
      // {
      //   path:'Dueno',
      //   component: DuenoComponent,
      // },
      {
        path: 'bienvenida',
        component: BienvenidaComponent,
      },
      {
        path: 'notificacion-dueno',
        component: NotificacionDuenoComponent,
      },
      {
        path: 'Interesados',
        component: InteresadosComponent,
      },
      {
        path: 'MiAsesor',
        component: MiAsesorComponent,
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }
