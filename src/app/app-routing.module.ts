import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloventaComponent } from './articuloventa/articuloventa.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogobycatComponent } from './catalogobycat/catalogobycat.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {path: "catalogo" , component: CatalogoComponent},
  {path: "categoria", component:CategoriaComponent},
  {path: "catalogobycat", component: CatalogobycatComponent},
  {path: "articuloventa", component: ArticuloventaComponent},
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: '**', component: CatalogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
