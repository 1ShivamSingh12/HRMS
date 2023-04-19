import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breadcrum'
})
export class BreadcrumPipe implements PipeTransform {

  transform(value: any): any {
    let replaced = value.split('/')
    // console.log(replaced,'kkkk');
    replaced = replaced[2]
    // console.log(replaced,'oooo');
    return replaced;
  }

}
