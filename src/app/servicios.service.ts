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
  constructor(private _http: HttpClient, private _router: Router) { }

  wsGeneral(ws: string, param: any ): Observable<any> {
    return this._http.post(this.apiURL + "/" + ws, param);
  }
}
