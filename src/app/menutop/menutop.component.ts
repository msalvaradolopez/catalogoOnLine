import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menutop',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.css']
})
export class MenutopComponent implements OnInit {

  // PARA MOSTRAR U OCULTAR ICONOS DEL MENU TOP
  _menuTopiconos: any = {
      barras : true,
      buscar: false,
      lupa: true,
      cerrar: false,
      regresar: false
  }

  _subscription: Subscription;

  constructor(private _servicios: ServiciosService) { }

  ngOnInit(): void {
    this._subscription = this._servicios.menuTopIconos$
      .subscribe(resp => {
        this._menuTopiconos = resp;
      });
  }


  accionLupa() {
    this._menuTopiconos.lupa = false;
    this._menuTopiconos.buscar = true;
    this._menuTopiconos.cerrar = true;
  }

  accionCerrar() {
    this._menuTopiconos.lupa = true;
    this._menuTopiconos.buscar = false;
    this._menuTopiconos.cerrar = false;

    this._servicios.buscar("");
  }

  onKeypressEvent(event: any){
    if (event.target.value.length > 2)
      this._servicios.buscar(event.target.value);
    else 
      this._servicios.buscar("");
  }
}
