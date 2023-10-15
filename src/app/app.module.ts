import { NgModule } from '@angular/core';
import {NgFor, AsyncPipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroComponent } from './registro/registro.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import { InmuebleComponent } from './inmueble/inmueble.component';

import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MenugloguedoComponent } from './menugloguedo/menugloguedo.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Observable} from 'rxjs';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { WebComponent } from './web/web.component';
import { WebModule } from './web/web.module';

import { VistadeinmuebleComponent } from './inmueble/vistadeinmueble/vistadeinmueble.component';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
   
    VistadeinmuebleComponent,
 

  
  ],
  imports: [
     NgFor,
     AsyncPipe,
     BrowserModule,
     BrowserAnimationsModule,
     HttpClientModule,
     MatIconModule,
     MatDividerModule,
     MatButtonModule,
    // NgbModule,
     FormsModule,
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatSelectModule,
     MatRadioModule,
     MatStepperModule,
     AppRoutingModule,
     InmuebleComponent,
     MatStepperModule,
     MatToolbarModule,
     MatListModule,
     MatMenuModule,
     MatGridListModule,
     MatTabsModule,   
     MatPaginatorModule,
     MatDialogModule,
     MatCheckboxModule,
     MatAutocompleteModule,
     ReactiveFormsModule,
     MatButtonToggleModule,
WebModule

  ],
  exports: [WebModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
