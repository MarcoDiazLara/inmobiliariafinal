import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdminComponent } from './company-admin.component';
import { AltainmoComponent } from './altainmo/altainmo.component';
import { AltasocioComponent } from './altasocio/altasocio.component';

const routes: Routes = [
  {
    path:'',
    component:CompanyAdminComponent,
    children: [
      {
        path: 'altainmo',
        component: AltainmoComponent,
      },
      {
        path: 'altasocio',
        component: AltasocioComponent,
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAdminRoutingModule { }
