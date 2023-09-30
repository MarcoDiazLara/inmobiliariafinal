import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersComponent } from './brokers.component';

const routes: Routes = [
  {
    path:'',
    component:BrokersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule { }
