import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.css']
})
export class MenutopComponent implements OnInit, OnDestroy {

  // PARA MOSTRAR y/o OCULTAR ICONOS DEL MENU TOP
  _menuTopiconos: any = {
      menu : true,
      titulo: true,
      buscar: true,
      cerrar: false,
      regresar: false,
      config: true,
      valorTitulo: ""
  }

  _inputBuscar: boolean = false;
  _spanEspacio: boolean = false;
  _valorTitulo: string;

  _dosColumnas: boolean = true;
  _subscription: Subscription;

  constructor(private _servicios: ServiciosService) { }

  ngOnInit(): void {
    this._menuTopiconos.valorTitulo = sessionStorage.getItem("nomEmpresa");
    this._valorTitulo = this._menuTopiconos.valorTitulo;

    this._subscription = this._servicios.menuTopIconos$
      .subscribe(resp => {
        this._menuTopiconos = resp;
        if (this._menuTopiconos.valorTitulo == "")
          this._menuTopiconos.valorTitulo = sessionStorage.getItem("nomEmpresa");

        this._valorTitulo = this._menuTopiconos.valorTitulo;
      });
  }


  accionLupa() {
    this._menuTopiconos.buscar = true;
    this._menuTopiconos.cerrar = true;
    this._menuTopiconos.nomEmpresa = false;
    this._inputBuscar = true;
  }

  accionCerrar() {
    this._menuTopiconos.buscar = false;
    this._menuTopiconos.cerrar = false;
    this._menuTopiconos.nomEmpresa = true;
    this._inputBuscar = false;
    this._servicios.buscar("");
  }

  // CAMBIAR DE DOS A TRES COLUMNAS O DE TRES COLUMNAS A DOS PARA MOSTRAR EL LISTADO DE ARTICULOS.
  accionColumnas() {
    this._dosColumnas = this._dosColumnas ? false : true;
    this._servicios.dosColumnas(this._dosColumnas );
  }

  accionRegresar() {
    this._servicios.iconosAcciones("regresar");
  }

  // enviar whatsapp
  mensajeWhatsApp() {
    this._servicios.wsWhatsApp("");
  }

  onKeypressEvent(event: any){
    if (event.target.value.length > 2)
      this._servicios.buscar(event.target.value);
    else 
      this._servicios.buscar("");
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
