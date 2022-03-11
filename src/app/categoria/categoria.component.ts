import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  _idEmpresa: number = 0;
  _categoriasList: any = [];
  _nomCategoria: string = "";

  _subscription: Subscription;

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({barras: true, buscar: false, lupa: false, cerrar: false, regresar: true})
    
    this._idEmpresa = parseInt(sessionStorage.getItem("idEmpresa"));

    this.getRows();
  }

  getRows() {

    this._servicios.wsGeneral("getCategorias", { idEmpresa: this._idEmpresa})
      .subscribe(x => {
        this._categoriasList = x;
      }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Categorías"));
  }
}
