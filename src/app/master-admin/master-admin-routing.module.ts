import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';
import { EliminarasesoresComponent } from './eliminarasesores/eliminarasesores.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AltasocioComponent } from './altasocio/altasocio.component';


const routes: Routes = [ 
{
path:'',
component:MasterAdminComponent,
children:[
{
 path:'eliminar',
  component:EliminarasesoresComponent
},
{
  path: 'altausuario',
  component: AltausuarioComponent,
},
{
  path: 'altasocio',
  component: AltasocioComponent,
},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAdminRoutingModule { }
