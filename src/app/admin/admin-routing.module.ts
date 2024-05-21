import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './component/perfil/perfil.component';
import { CategoriaComponent } from './component/categoria/categoria.component';

const routes: Routes = [
  {
    path: 'perfil', component: PerfilComponent
  },
  {
    path: 'categoria', component: CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
