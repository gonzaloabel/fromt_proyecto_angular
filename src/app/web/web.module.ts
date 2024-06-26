import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    InicioComponent,
    BlogComponent,
    ServicioComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
