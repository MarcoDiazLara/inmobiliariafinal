import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuenoComponent } from './dueno.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

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
      }

   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuenoRoutingModule { }
