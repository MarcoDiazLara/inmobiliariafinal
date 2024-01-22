import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAdminRoutingModule } from './company-admin-routing.module';
import { CompanyAdminComponent } from './company-admin.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

/*tablas */
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';


import { CompanyAdminpasswordComponent } from './ventanaemergente/company-adminpassword/company-adminpassword.component';
import { AltaBrokersComponent } from './alta-brokers/alta-brokers.component';
import { NotificacionescompanyAdminComponent } from './notificacionescompany-admin/notificacionescompany-admin.component';
import { CompAsignarAsesorComponent } from './ventanaemergente/comp-asignar-asesor/comp-asignar-asesor.component';
import { CompanyAsignarReasignarComponent } from './company-asignar-reasignar/company-asignar-reasignar.component';
import { CatalogoinmuebleComponent } from './catalogoinmueble/catalogoinmueble.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { Inventarioadmin } from './inventario-admin/inventario-admin.component';
import { PantallaUsuariosComponent } from './pantalla-usuarios/pantalla-usuarios.component';
import { InformacionusuariosadmComponent } from './ventanaemergente/informacionusuariosadm/informacionusuariosadm.component';
import { PerfilcompanyAdminComponent } from './perfilcompany-admin/perfilcompany-admin.component';
import { PerfilempresaComponent } from './perfilempresa/perfilempresa.component';
import { InformacionInmuebleComponent } from './ventanaemergente/informacion-inmueble/informacion-inmueble.component';
import { AdminhitoComponent } from './adminhito/adminhito.component';

import { CompAsignaBrokerComponent } from './ventanaemergente/comp-asigna-broker/comp-asigna-broker.component';
import { CompAsignaGrupoComponent } from './comp-asigna-grupo/comp-asigna-grupo.component';
import { UsuariosbrokerComponent } from './ventanaemergente/usuariosbroker/usuariosbroker.component';

//-------------------------------------------------------------
//idioma del calendario
import localeEs from '@angular/common/locales/es';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//-------------------------------------------------------------

import { registerLocaleData } from '@angular/common';
import { EstatususuarioComponent } from './estatususuario/estatususuario.component';
import { EstatusComponent } from './ventanaemergente/estatus/estatus.component';
import { CompBrokerComponent } from './ventanaemergente/comp-broker/comp-broker.component';
import { CargausuariosComponent } from './cargausuarios/cargausuarios.component';
import { IdusuarioComponent } from './ventanaemergente/idusuario/idusuario.component';






/end/
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    CompanyAdminComponent,
    CompanyAdminpasswordComponent,
    AltaBrokersComponent,
    PerfilcompanyAdminComponent,
    NotificacionescompanyAdminComponent,
    Inventarioadmin,
    CompAsignarAsesorComponent,
    CompanyAsignarReasignarComponent,
    CatalogoinmuebleComponent,
    PantallaUsuariosComponent,
    InformacionusuariosadmComponent,
    PerfilempresaComponent,
    InformacionInmuebleComponent,
    AdminhitoComponent,
    CompAsignaBrokerComponent,
    CompAsignaGrupoComponent,
    UsuariosbrokerComponent,
    EstatususuarioComponent,
    EstatusComponent,
    CompBrokerComponent,
    CargausuariosComponent,
    IdusuarioComponent

    

    

    
  
  
  ],
  imports: [
    CommonModule,
    CompanyAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgIf,
    NgFor,
    MatMenuModule, 
    GoogleMapsModule,

  
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' }, // Establece el idioma predeterminado
  ],
})
export class CompanyAdminModule { }
