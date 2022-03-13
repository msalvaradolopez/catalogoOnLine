import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articuloventa',
  templateUrl: './articuloventa.component.html',
  styleUrls: ['./articuloventa.component.css']
})
export class ArticuloventaComponent implements OnInit, OnDestroy {

  _subIconosAcciones:  Subscription;

  constructor(private _servicios: ServiciosService, private _toastr: ToastrService, private _router: Router) { }

  ngOnInit(): void {
    // ACTIVA ICONOS DEL MENU TOP
    this._servicios.menuTopIconos({menu: true, nomEmpresa: false, buscar: false, cerrar: false, regresar: true, config: false})

       // acciones llamadas desde el menuTop
       this._subIconosAcciones = this._servicios.iconosAcciones$
       .subscribe(resp => {
         if (resp == "regresar")
         this._router.navigate(['/catalogobycat']) ;

       });
  }

  ngOnDestroy(): void {
    this._subIconosAcciones.unsubscribe();
  }
}
