import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArviceSpaceComponent } from './arvice-space.component';

const routes: Routes = [
  {
    path: '',
    component: ArviceSpaceComponent,
    children: [

      {
        path: 'Arvice',
        component: ArviceSpaceComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArviceSpaceRoutingModule { }
