import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'catalogoMobile';


  constructor(private _router: Router) {}

  ngOnInit(): void {
    sessionStorage.setItem("nomEmpresa", "Mi Tienda")

    this._router.navigate["catalogo"] ;

    sessionStorage.setItem("idEmpresa", "1");
  }
}
