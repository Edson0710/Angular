import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})  // No lleva ;
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos mas populares";
        console.log("Se ha cargado el componente Videojuego");
    }
    ngOnInit(){
        console.log("OnInit ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo";
    }
}