import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArviceSpaceRoutingModule } from './arvice-space-routing.module';



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
import { ArviceSpaceComponent } from './arvice-space.component';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';

@NgModule({
  declarations: [
    ArviceSpaceComponent,
    RegistrarUserComponent
  ],
  imports: [
    CommonModule,
    ArviceSpaceRoutingModule,
    CommonModule,
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
})
export class ArviceSpaceModule { }
