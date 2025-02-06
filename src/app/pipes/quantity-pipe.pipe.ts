import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityPipe'
})
export class QuantityPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args.length > 0){
      let wordPipe = args[0];
      return `${value} ${wordPipe}`
    } else {
      return `${value} Items`;
    }
  }

}
