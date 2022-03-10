import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  _articulosList: any = [];

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRows();
  }

  getRows() {

    this._servicios.wsGeneral("getArticulos", { nomArticulo: "" })
      .subscribe(x => {
        this._articulosList = x;
        console.log(this._articulosList);
      }, error => this._toastr.error("Error : " + error.error.ExceptionMessage, "Sucursal"));
  }

}
