import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{

    // dato | calculadora: otrodato
    // param 1              param2
    transform(value: any, value_two: any){
        // entre comillas se usa JS
        let operaciones = `
            Suma: ${value + value_two} -
            Resta: ${value - value_two} -
            Multiplicacion: ${value * value_two} -
            Division: ${value / value_two} 
        `;
        return operaciones;
    }   
}