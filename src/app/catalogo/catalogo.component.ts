import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, OnDestroy {

  _idEmpresa: number = 0;
  _articulosList: any = [];
  _nomArticulo: string = "";

  _subscription: Subscription;

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService) { }

  ngOnInit(): void {

    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({barras: true, buscar: false, lupa: true, cerrar: false, regresar: false})

    this._idEmpresa = parseInt(sessionStorage.getItem("idEmpresa"));

    this._subscription = this._servicios.buscar$
      .subscribe(resp => {
        this._nomArticulo = resp;
        this.getRows();
      });


    this.getRows();
  }

  getRows() {

    this._servicios.wsGeneral("getArticulos", { idEmpresa: this._idEmpresa, nomArticulo: this._nomArticulo })
      .subscribe(x => {
        this._articulosList = x;
      }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Sucursal"));
  }

  ngOnDestroy() {
    
    this._subscription.unsubscribe();
   
  }
}
