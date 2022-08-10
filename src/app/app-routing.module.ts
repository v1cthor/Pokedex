import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
