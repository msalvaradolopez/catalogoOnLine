import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {path: "catalogo" , component: CatalogoComponent},
  {path: "categoria", component:CategoriaComponent},
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: '**', component: CatalogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
