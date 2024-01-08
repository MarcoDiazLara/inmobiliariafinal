import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenoComponent } from './dueno.component';
import { NotificacionDuenoComponent } from './notificacion-dueno/notificacion-dueno.component';
import { InteresadosComponent } from './interesados/interesados.component';
import { MiAsesorComponent } from './mi-asesor/mi-asesor.component';
import { DatosInteresadosComponent } from './interesados/datos-interesados/datos-interesados.component';
import { CambioasesorComponent } from './cambioasesor/cambioasesor.component';
import { PerfilduenoComponent } from './perfildueno/perfildueno.component';
import { BienvenidaComponent } from '../web/bienvenida/bienvenida.component';

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
      },
      {
        path: 'datos-interesados',
        component: DatosInteresadosComponent
      },
      {
        path: 'cambioasesor',
        component: CambioasesorComponent
      },
      {
        path: 'perfil',
        component: PerfilduenoComponent
      },
      {
        path: 'bienvenida',
        component: BienvenidaComponent
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }
