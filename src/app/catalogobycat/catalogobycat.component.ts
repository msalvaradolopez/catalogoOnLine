import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogobycat',
  templateUrl: './catalogobycat.component.html',
  styleUrls: ['./catalogobycat.component.css']
})
export class CatalogobycatComponent implements OnInit, OnDestroy {

  _tituloVentana: string = "";

  _idEmpresa: number = 0;
  _articulosList: any = [];
  _buscarArticulo: string = "";
  _idCategoria: string = "";
  _classDosColumnas: string = "articuloslistadoDosCol";
  _classArticuloTituloDosCol: string = "articulo-titulo";

  _subscription: Subscription;
  _subScrDosColumnas: Subscription;

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {
    this._idEmpresa = parseInt(sessionStorage.getItem("idEmpresa"));
    this._idCategoria = sessionStorage.getItem("idCategoria");
 // ACTIVA ICONOS DEL MENU TOP
 this._servicios.menuTopIconos({menu: false, titulo: true, buscar: false, cerrar: false, regresar: true, config: true, valorTitulo: this._idCategoria})

 // BUSCAR ARTICULOS
 this._subscription = this._servicios.buscar$
   .subscribe(resp => {
     this._buscarArticulo = resp;
     this.getRows();
   });

   // CAMBIAR EL FORMATO DE LISTADO POR COLUMNAS 
   this._subScrDosColumnas = this._servicios.dosColumnas$
   .subscribe(resp => this.dosColumnas(resp));


 this.getRows();
}

getRows() {

 this._servicios.wsGeneral("getArticulosByCategoria", { idEmpresa: this._idEmpresa,idCategoria: this._idCategoria,  nomArticulo: this._buscarArticulo })
   .subscribe(x => {
     this._articulosList = x;
   }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Sucursal"));
}

// VENTANA PARA CAPTURAR CANTIDADES Y ACCIONES DE COMPRA.
articuloVenta(idArticulo: string) {
  sessionStorage.setItem("idArticulo", idArticulo);
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

