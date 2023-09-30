import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAdminRoutingModule } from './company-admin-routing.module';
import { CompanyAdminComponent } from './company-admin.component';

@NgModule({
  declarations: [
    CompanyAdminComponent
  ],
  imports: [
    CommonModule,
    CompanyAdminRoutingModule
  ]
})
export class CompanyAdminModule { }
