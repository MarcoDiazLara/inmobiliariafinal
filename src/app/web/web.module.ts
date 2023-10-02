import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AtajosComponent } from './atajos/atajos.component';
import { DescargaComponent } from './descarga/descarga.component';

@NgModule({
  declarations: [
    WebComponent,
    FooterComponent,
    MenuComponent,
    BuscadorComponent,
    AtajosComponent,
    DescargaComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class WebModule { }
