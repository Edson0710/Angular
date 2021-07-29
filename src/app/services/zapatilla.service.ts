import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'blanco', 80, true),
            new Zapatilla('jordan 1', 'Nike', 'negras', 60, true),
            new Zapatilla('Airforce', 'Nike', 'negras', 70, true),
            new Zapatilla('forum', 'Adidas', 'rosa', 180, false),
            new Zapatilla('Valerianas', 'Valeria', 'Amarillas', 70, false)
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}