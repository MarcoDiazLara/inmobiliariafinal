import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterAdminComponent } from './master-admin.component';
import { EliminarasesoresComponent } from './eliminarasesores/eliminarasesores.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { AltasocioComponent } from './altasocio/altasocio.component';
import { PerfilmasterAdminComponent } from './perfilmaster-admin/perfilmaster-admin.component';
import { NotificacionesmasterAdminComponent } from './notificacionesmaster-admin/notificacionesmaster-admin.component';
import { MasterEstatususuarioComponent } from './master-estatususuario/master-estatususuario.component';


const routes: Routes = [ 
{
path:'',
component:MasterAdminComponent,
children:[
{
    path:'perfil',
     component:PerfilmasterAdminComponent
},
{
  path:'notificaciones',
   component:NotificacionesmasterAdminComponent
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
  path: 'estatusUsuario',
  component: MasterEstatususuarioComponent,
},

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterAdminRoutingModule { }
