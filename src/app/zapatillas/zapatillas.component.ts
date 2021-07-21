import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'blanco', 80, true),
            new Zapatilla('jordan 1', 'Nike', 'negras', 60, true),
            new Zapatilla('Airforce', 'Nike', 'negras', 70, true),
            new Zapatilla('forum', 'adidas', 'rosa', 180, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }
}