import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdminComponent } from './company-admin.component';
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';
import { NotificacionescompanyAdminComponent } from './notificacionescompany-admin/notificacionescompany-admin.component';
import { CompAsignarAsesorComponent } from './ventanaemergente/comp-asignar-asesor/comp-asignar-asesor.component';
import { CompanyAsignarReasignarComponent } from './company-asignar-reasignar/company-asignar-reasignar.component';
import { CatalogoinmuebleComponent } from './catalogoinmueble/catalogoinmueble.component';
import { Inventarioadmin } from './inventario-admin/inventario-admin.component';
import { PantallaUsuariosComponent } from './pantalla-usuarios/pantalla-usuarios.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';

const routes: Routes = [
  {
    path:'',
    component:CompanyAdminComponent,
    children: [
      {
        path: 'altabrokers',
        component: AltaBrokersComponent,
      },
      {
        path: 'Perfil',
        component: PerfilcompanyAdminComponent,
      },
      {
        path: 'Notificaciones',
        component: NotificacionescompanyAdminComponent,
      },
      {
        path: 'Asignar-reasignar',
        component: CompanyAsignarReasignarComponent,
      },
      {
        path:'catalogoinmueble',
        component:CatalogoinmuebleComponent,

      },
      {
        path: 'Inventario',
        component:Inventarioadmin,

      },
      {

        path: 'PantallaUsuarios',
        component:PantallaUsuariosComponent,

      },
      {
          path:'perfilempresa',
          component:PerfilempresaComponent,

      }


    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAdminRoutingModule { }
