import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Iarticulo } from '../imodelo-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, OnDestroy {

  _idEmpresa: number = 0;
  _articulosList: any = [];
  _nomArticulo: string = "";
  _classDosColumnas: string = "articuloslistadoDosCol";
  _classArticuloTituloDosCol: string = "articulo-titulo";

  _subscription: Subscription;
  _subScrDosColumnas: Subscription;

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {

    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({menu: true, titulo: true, buscar: false, cerrar: false, regresar: false, config: true, valorTitulo: ""})

    this._idEmpresa = parseInt(sessionStorage.getItem("idEmpresa"));

    // BUSCAR ARTICULOS
    this._subscription = this._servicios.buscar$
      .subscribe(resp => {
        this._nomArticulo = resp;
        this.getRows();
      });

      // CAMBIAR EL FORMATO DE LISTADO POR COLUMNAS 
      this._subScrDosColumnas = this._servicios.dosColumnas$
      .subscribe(resp => this.dosColumnas(resp));


    this.getRows();
  }

  getRows() {

    this._servicios.wsGeneral("getArticulos", { idEmpresa: this._idEmpresa, nomArticulo: this._nomArticulo })
      .subscribe(x => {
        this._articulosList = x;
      }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Sucursal"));
  }

  articuloVenta(articulo: Iarticulo) {
    let articuloVenta = JSON.stringify(articulo)
    sessionStorage.setItem("articuloVenta", articuloVenta);
    this._router.navigate(['/articuloventa']) ;
  }

  // CAMBIO DE FORMATO LISTADO EN COLUMNAS : DOS COLUMNAS / TRES COLUMNAS.
  dosColumnas(accion: boolean) {
    this._classDosColumnas = accion ? "articuloslistadoDosCol" : "articuloslistadoTresCol";
    this._classArticuloTituloDosCol = accion ? "articulo-titulo" : "articulo-tituloTresCol";
  }

  ngOnDestroy() {
      this._subscription.unsubscribe();
      this._subScrDosColumnas.unsubscribe();
   
  }
}
