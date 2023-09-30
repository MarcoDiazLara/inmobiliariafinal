import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';
import { MasterAdminModule } from './master-admin/master-admin.module';
import { CompanyAdminModule } from './company-admin/company-admin.module';
import { BrokersModule } from './brokers/brokers.module';
import { AgentesModule } from './agentes/agentes.module';
import { WebModule } from './web/web.module';
import { RegistroComponent } from './registro/registro.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

const routes: Routes = [
  {
    path: 'superUsuario',
    loadChildren: ()=> import('./master-admin/master-admin.module').then(m =>m.MasterAdminModule)
  },
  {
    path: 'inmobiliaria',
    loadChildren: ()=> import('./company-admin/company-admin.module').then(m =>m.CompanyAdminModule)
  },
  {
    path: 'usuario',
    loadChildren: ()=> import('./brokers/brokers.module').then(m =>m.BrokersModule)
  },
  {
    path: 'asesor',
    loadChildren: ()=> import('./agentes/agentes.module').then(m =>m.AgentesModule)
  },
  {
    path: 'index',
    loadChildren: ()=> import('./web/web.module').then(m =>m.WebModule)
  },
  
  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'registro',
    component: RegistroComponent
  },

  {
    path:'publicar',
    component: InmuebleComponent
  },






  { 
    path: '**',
    redirectTo: 'index',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
