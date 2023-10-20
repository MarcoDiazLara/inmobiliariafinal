import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';
import { EliminarasesoresComponent } from './eliminarasesores/eliminarasesores.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AltasocioComponent } from './altasocio/altasocio.component';
import { MasterAsignarReasignarComponent } from './master-asignar-reasignar/master-asignar-reasignar.component';


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
{
  path: 'Asignar-reasignar',
  component: MasterAsignarReasignarComponent,
},
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAdminRoutingModule { }
