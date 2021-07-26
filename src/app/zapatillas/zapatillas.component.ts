import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas:Array<Zapatilla>;
    public marcas:String[];
    public color:string;
    public mi_marca:string ="Prueba";
    constructor(){
        this.color = 'orange';
        this.marcas = new Array;
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'blanco', 80, true),
            new Zapatilla('jordan 1', 'Nike', 'negras', 60, true),
            new Zapatilla('Airforce', 'Nike', 'negras', 70, true),
            new Zapatilla('forum', 'Adidas', 'rosa', 180, false),
            new Zapatilla('Valerianas', 'Valeria', 'Amarillas', 70, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
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