import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdminComponent } from './company-admin.component';
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';

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
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyAdminRoutingModule { }
