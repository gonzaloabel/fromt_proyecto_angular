import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './component/perfil/perfil.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './component/producto/producto.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule
  ]
})
export class AdminModule { }
