import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    WebComponent
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
