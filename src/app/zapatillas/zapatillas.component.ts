import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas:Array<Zapatilla> = [];
    public marcas:String[];
    public color:string;
    public mi_marca:string ="Prueba";

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color = 'orange';
        this.marcas = new Array;
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            //  Ingresar una marca si no está ya agregada
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index:number){
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("Has salido del input");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}