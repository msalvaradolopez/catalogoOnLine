import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorialistadoComponent } from './categorialistado/categorialistado.component';
import { CategoriadetComponent } from './categoriadet/categoriadet.component';
import { MenutopComponent } from './menutop/menutop.component';
import { CatalogobycatComponent } from './catalogobycat/catalogobycat.component';
import { ArticuloventaComponent } from './articuloventa/articuloventa.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    CategoriaComponent,
    CategorialistadoComponent,
    CategoriadetComponent,
    MenutopComponent,
    CatalogobycatComponent,
    ArticuloventaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
