import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesComponent } from './agentes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {
    path:'',
    component:AgentesComponent,
    children: [
      {
          path: 'perfil',
          component: PerfilComponent
      },
      {
        path: 'menu',
        component: MenuComponent
          }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
