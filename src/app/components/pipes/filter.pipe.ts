import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], arg: any): any {
    
    if(!arg) return value
    
    // return value.filter(pokemon => {console.log(pokemon); pokemon.name.toUpperCase().indexOf(arg > -1)})
    
    const resultado = [];
    for (const pokemon of value) {
      if (pokemon.name.toLowerCase().indexOf(arg) > -1) {
        resultado.push(pokemon);
      } else if (pokemon.types[0].type.name.toLowerCase().indexOf(arg) > -1) {
        resultado.push(pokemon);
      };
    };
    return resultado;
  }

}
