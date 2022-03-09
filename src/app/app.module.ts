import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogodetComponent } from './catalogodet/catalogodet.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorialistadoComponent } from './categorialistado/categorialistado.component';
import { CategoriadetComponent } from './categoriadet/categoriadet.component';
import { MenutopComponent } from './menutop/menutop.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CatalogodetComponent,
    CategoriaComponent,
    CategorialistadoComponent,
    CategoriadetComponent,
    MenutopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
