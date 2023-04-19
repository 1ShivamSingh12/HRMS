import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subHeading'
})
export class SubHeadingPipe implements PipeTransform {

  transform(value: any): any {
    var count = value.split("/").length - 1;
    if (count > 2) {
      // const result = message.replaceAll('JS','JavaScript');
      value = value.replaceAll('/', '>')
      value = value.replaceAll('/', ' ')
      value = value.replaceAll('-', ' ')
      value = value.slice(11)
      return value
    } else {
      return ""
    }
  }

}
