import { Iarticulo, Icarrito } from "./imodelo-db";

export class VentaAcciones {
    private cantidad: number;
    private _articulo: Iarticulo;
    private _carrito: Icarrito[];

    constructor(private pArticulo: Iarticulo, private pCarrito: Icarrito[]){
        this._articulo = pArticulo;
        this._carrito = pCarrito;
    }

    addCarrito(pCantidad: number): Icarrito[] {

        let carritoNuevo :Icarrito = {articulo: null, cantidad: 0};

        // busco si ya existe en el listado de carrito.
        carritoNuevo = this.getCarrito();
        if (carritoNuevo) 
            this._carrito = this.updCarrito(pCantidad);        
        else {
            carritoNuevo = {articulo: this._articulo, cantidad: pCantidad};
            this._carrito.push(carritoNuevo);
        }

        /*
        if (this._carrito) {
                // busco si ya existe en el listado de carrito.
                carritoNuevo = this.getCarrito();
                if (carritoNuevo) 
                this._carrito = this.updCarrito(pCantidad);        
                else {
                    carritoNuevo = {articulo: this._articulo, cantidad: pCantidad};
                    this._carrito.push(carritoNuevo);
                }
        } else {
            carritoNuevo = {articulo: this._articulo, cantidad: pCantidad};
            this._carrito.push(carritoNuevo);
        }
        */
        
        return this._carrito;
    }

    getCarrito(): Icarrito {
        return this._carrito.filter(x => x.articulo.idArticulo == this._articulo.idArticulo)[0]
    }

    updCarrito(pCantidad: number): Icarrito[] {
        return this._carrito.map(x => {
            if (x.articulo.idArticulo== this._articulo.idArticulo) 
                 x.cantidad = pCantidad;
            return x;
        });
    }

    delCarrito(): Icarrito[] {
        return this._carrito.filter(x => x.articulo.idArticulo != this._articulo.idArticulo);
    }

}
