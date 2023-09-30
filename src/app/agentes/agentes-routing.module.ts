import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes.component';
import { PerfilComponent } from './perfil/perfil.component';
const routes: Routes = [
  {
    path:'',
    component:AgentesComponent,
    children: [
      {
          path: 'perfil',
          component: PerfilComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
