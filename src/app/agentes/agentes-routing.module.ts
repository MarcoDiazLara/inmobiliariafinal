import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes.component';
import { PerfilagentesComponent } from './perfilagentes/perfilagentes.component';
const routes: Routes = [
  {
    path:'',
    component:AgentesComponent,
    children: [ 
      {
        path:'Perfil',
        component: PerfilagentesComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
