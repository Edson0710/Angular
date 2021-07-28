import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string = "";
  public followers: number = 0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      // this.nombre = params['nombre'];
      // + para convertir de string a number
      this.followers = +params.followers;
      console.log(this.nombre);
      // console.log(typeof +params.followers);
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
