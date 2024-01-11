import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { NotificacionesclienteComponent } from './notificacionescliente/notificacionescliente.component';
import { PerfilclienteComponent } from './perfilcliente/perfilcliente.component';
import { WebComponent } from '../web/web.component';
import { QuierescomprarComponent } from '../web/quierescomprar/quierescomprar.component';
import { CalendarioComponent } from './calendario/calendario.component';



const routes: Routes = [

  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  
  {
    path: 'cliente',
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
        path:'calendario',
        component: CalendarioComponent,
      },
      
     

    ],
  },
  {
    path: "index",
    component: WebComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
