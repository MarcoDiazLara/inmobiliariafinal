import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';
import { AltaBrokersComponent } from './modals/alta-brokers/alta-brokers.component';


const routes: Routes = [ 
{
path:'',
component:MasterAdminComponent,
children:[
{
  path:'altabroker',
  component:AltaBrokersComponent
},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAdminRoutingModule { }
