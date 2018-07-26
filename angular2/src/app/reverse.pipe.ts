import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args)
    if (value != undefined && args)
      return value.split("").reverse().join("");
    else
      return value;
  }

}
