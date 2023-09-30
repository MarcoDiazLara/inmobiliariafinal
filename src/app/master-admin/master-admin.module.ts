import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterAdminRoutingModule } from './master-admin-routing.module';
import { MasterAdminComponent } from './master-admin.component';
import { AltaBrokersComponent } from './modals/alta-brokers/alta-brokers.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    MasterAdminComponent,
    AltaBrokersComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MasterAdminRoutingModule
  ]
})
export class MasterAdminModule { }
