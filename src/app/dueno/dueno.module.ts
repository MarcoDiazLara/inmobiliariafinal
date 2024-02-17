import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuenoRoutingModule } from './dueno-routing.module';
import { DuenoComponent } from './dueno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


/*tablas */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { GoogleMapsModule } from '@angular/google-maps';
// lenguaje
import localeEs from '@angular/common/locales/es';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import { NotificacionDuenoComponent } from './notificacion-dueno/notificacion-dueno.component';
import { MiAsesorComponent } from './mi-asesor/mi-asesor.component';
import { InteresadosComponent } from './interesados/interesados.component';
import { DatosInteresadosComponent } from './interesados/datos-interesados/datos-interesados.component';
import { CambioasesorComponent } from './cambioasesor/cambioasesor.component';
import { PerfilduenoComponent } from './perfildueno/perfildueno.component';
import { DuenopasswordComponent } from './ventanaemergente/duenopassword/duenopassword.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    DuenoComponent,
    NotificacionDuenoComponent,
    MiAsesorComponent,
    InteresadosComponent,
    DatosInteresadosComponent,
    CambioasesorComponent,
    PerfilduenoComponent,
    DuenopasswordComponent,
    InmueblesComponent,
  ],
  imports: [
    CommonModule,
    DuenoRoutingModule,
    CommonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    GoogleMapsModule,
    MatNativeDateModule


  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' }, // Establece el idioma predeterminado
  ],
})

export class DuenoModule { }
