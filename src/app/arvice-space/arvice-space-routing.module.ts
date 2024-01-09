import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArviceSpaceComponent } from './arvice-space.component';
import { RegistrarUserComponent} from './registrar-user/registrar-user.component';
import { MostrarInmueblesComponent } from './mostrar-inmuebles/mostrar-inmuebles.component';

const routes: Routes = [
  {
    path: '',
    component: ArviceSpaceComponent,
    children: [

      {
        path:'Arvice',
        component: ArviceSpaceComponent,
      },
      {
        path:'AgregarUser',
        component: RegistrarUserComponent,
      },
      {
        path:'mostrarInmuebles',
        component: MostrarInmueblesComponent,
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArviceSpaceRoutingModule { }
