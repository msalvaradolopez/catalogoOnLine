import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient  } from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  apiURL: string = environment.apiURL;

  private _buscar = new Subject<string>();
  buscar$ = this._buscar.asObservable();

  private _menuTopIconos = new Subject<string>();
  menuTopIconos$ = this._menuTopIconos.asObservable();

  constructor(private _http: HttpClient, private _router: Router) { }

  wsGeneral(ws: string, param: any ): Observable<any> {
    return this._http.post(this.apiURL + "/" + ws, param);
  }

  buscar(buscar: string) {
    this._buscar.next(buscar);
  }

  menuTopIconos(iconos: any) {
    this._menuTopIconos.next(iconos);
  }

}
