import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  _idEmpresa: number = 0;
  _categoriasList: any = [];
  _nomCategoria: string = "";


  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {
    // ACTIVA ICONOS DEL MENU TOP
    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({menu: true, titulo: true, buscar: false, cerrar: false, regresar: false, config: true, valorTitulo: ""})
    
    this._idEmpresa = parseInt(sessionStorage.getItem("idEmpresa"));

    this.getRows();
  }

  getRows() {

    this._servicios.wsGeneral("getCategorias", { idEmpresa: this._idEmpresa})
      .subscribe(x => {
        this._categoriasList = x;
      }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Categorías"));
  }

  catalogoByCat (idCategoria: string) {
    sessionStorage.setItem("idCategoria", idCategoria)
    this._router.navigate(['/catalogobycat']) ;
  }


}
