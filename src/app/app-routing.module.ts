import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';

import { CompanyAdminModule } from './company-admin/company-admin.module';
import { BrokersModule } from './brokers/brokers.module';
import { AgentesModule } from './agentes/agentes.module';
import { WebModule } from './web/web.module';
import { RegistroComponent } from './registro/registro.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { ClienteModule } from './cliente/cliente.module';
import { MasterAdminModule } from './master-admin/master-admin.module';
import { DetallesComponent } from './inmueble/detalles/detalles.component';
import { MenugloguedoComponent } from './menugloguedo/menugloguedo.component';
import { DuenoComponent } from './dueno/dueno.component';
import { ArviceSpaceComponent } from './arvice-space/arvice-space.component';
import { RematehipotecarioComponent } from './web/rematehipotecario/rematehipotecario.component';



const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'menu2',
    component: MenugloguedoComponent
  },
  {
    path: 'superUsuario',
    loadChildren: () => import('./master-admin/master-admin.module').then(m => m.MasterAdminModule)
  },
  {
    path: 'Company',
    loadChildren: () => import('./company-admin/company-admin.module').then(m => m.CompanyAdminModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./brokers/brokers.module').then(m => m.BrokersModule)
  },
  {
    path: 'asesor',
    loadChildren: () => import('./agentes/agentes.module').then(m => m.AgentesModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./web/web.module').then(m => m.WebModule)
  },
  {
    path: 'Dueno',
    loadChildren: () => import('./dueno/dueno.module').then(m => m.DuenoModule)
  },
  {
    path: 'inmueble',
    loadChildren: () => import('./inmueble/inmueble.module').then(m => m.InmuebleModule)
  },
  {
    path: 'arvice',
    loadChildren: () => import('./arvice-space/arvice-space.module').then(m => m.ArviceSpaceModule)
  },

  { 
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full'
  },
 



]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
