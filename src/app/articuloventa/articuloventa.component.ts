import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Iarticulo } from '../imodelo-db';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articuloventa',
  templateUrl: './articuloventa.component.html',
  styleUrls: ['./articuloventa.component.css']
})
export class ArticuloventaComponent implements OnInit, OnDestroy {

  _articulo: Iarticulo;
  _subIconosAcciones:  Subscription;

  _nombreTipo: string = "";

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    // SE OBTIENEN VARIABLES DEL STORAGE
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
   transform(base64Image: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }  

  ngOnDestroy(): void {
    this._subIconosAcciones.unsubscribe();
  }
}
