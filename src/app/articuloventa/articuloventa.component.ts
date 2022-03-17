import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Iarticulo, Icarrito } from '../imodelo-db';
import { Iimagen } from '../imodelo-db';
import { DomSanitizer } from '@angular/platform-browser';
import { VentaAcciones } from '../venta-acciones';

@Component({
  selector: 'app-articuloventa',
  templateUrl: './articuloventa.component.html',
  styleUrls: ['./articuloventa.component.css']
})
export class ArticuloventaComponent implements OnInit, OnDestroy {

  _articulo: Iarticulo;
  _carrito: Icarrito[];
  _subIconosAcciones:  Subscription;


  _nombreTipo: string = "";

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this._articulo = JSON.parse(sessionStorage.getItem("articuloVenta"));

    if (this._articulo.tipo == "N")
    this._nombreTipo = "Nuevo";

    if (this._articulo.tipo == "U")
    this._nombreTipo = "Usado"

    if (this._articulo.tipo == "S")
    this._nombreTipo = "Saldo";

    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({menu: false, titulo: true, buscar: false, cerrar: false, regresar: true, config: true, valorTitulo: this._articulo.nomArticulo})

       // acciones llamadas desde el menuTop
       this._subIconosAcciones = this._servicios.iconosAcciones$
       .subscribe(resp => {
         if (resp == "regresar")
         this._router.navigate(['/catalogobycat']) ;

       });
  }

  //Call this method in the image source, it will sanitize it.
  transform(imagenes: Iimagen[]){
    // return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
    let urlImagen: string = ""
    let imagenPrincipal: Iimagen [] = imagenes.filter(x => x.principal == "S");

    if (imagenPrincipal.length > 0 )
      urlImagen = imagenPrincipal[0].urlImagen;


      console.log(urlImagen);
      return urlImagen;
  }    

  addCarrito(articulo: Iarticulo) {

    /// BOTENER EL CARRITO DE LA SESSION
    this._carrito = JSON.parse(sessionStorage.getItem("_carrito"));
    if (!this._carrito) 
        this._carrito = [];    

    let addCarritoAccion = new VentaAcciones(articulo, this._carrito);

    this._carrito = addCarritoAccion.addCarrito(5);
    console.log("informacion del carrito.");
    console.log(this._carrito);
    // ASIGNA EL NUEVO VALOR DEL CARRITO A LA SESSION
    sessionStorage.setItem("_carrito", JSON.stringify(this._carrito));

  }

  ngOnDestroy(): void {
    this._subIconosAcciones.unsubscribe();
  }
}
