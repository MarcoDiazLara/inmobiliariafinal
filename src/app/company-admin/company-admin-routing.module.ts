import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdminComponent } from './company-admin.component';
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';
import { NotificacionescompanyAdminComponent } from './notificacionescompany-admin/notificacionescompany-admin.component';
import { CompanyAsignarReasignarComponent } from './company-asignar-reasignar/company-asignar-reasignar.component';
import { CatalogoinmuebleComponent } from './catalogoinmueble/catalogoinmueble.component';
import { Inventarioadmin } from './inventario-admin/inventario-admin.component';
import { PantallaUsuariosComponent } from './pantalla-usuarios/pantalla-usuarios.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { AdminhitoComponent } from './adminhito/adminhito.component';
import { CompAsignaGrupoComponent } from './comp-asigna-grupo/comp-asigna-grupo.component';
import { EstatusComponent } from './ventanaemergente/estatus/estatus.component';
import { EstatususuarioComponent } from './estatususuario/estatususuario.component';
import { BienvenidaComponent } from '../web/bienvenida/bienvenida.component';
import { CargausuariosComponent } from './cargausuarios/cargausuarios.component';
import { CargadeinmueblesComponent } from './cargadeinmuebles/cargadeinmuebles.component';
import { VisualizaciondeinmueblesComponent } from './visualizaciondeinmuebles/visualizaciondeinmuebles.component';
import { HistorialComponent } from './historial/historial.component';


const routes: Routes = [
  {
    path: '',
    component: CompanyAdminComponent,
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
        path: 'catalogoinmueble',
        component: CatalogoinmuebleComponent,

      },
      {
        path: 'Inventario',
        component: Inventarioadmin,

      },
      {
        path: 'Hitoadmin',
        component: AdminhitoComponent,

      },
      {

        path: 'PantallaUsuarios',
        component: PantallaUsuariosComponent,

      },
      {
        path: 'perfilempresa',
        component: PerfilempresaComponent,

      },
      {
        path: 'EquipoTrabajo',
        component: CompAsignaGrupoComponent

      },
      {
        path: 'estatususuario',
        component: EstatususuarioComponent

      },
      {
        path: 'bienvenida',
        component: BienvenidaComponent

      },
      {
        path: 'cargausuario',
        component: CargausuariosComponent

      },
      {
        path: 'cargadeinmuebles',
        component:CargadeinmueblesComponent
      },
      {
        path: 'visualizaciondeinmuebles',
        component:VisualizaciondeinmueblesComponent
      },
      {
        path: 'historial',
        component: HistorialComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAdminRoutingModule { }
