import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableElementGetter',
  pure:false
})
export class TableElementGetterPipe implements PipeTransform {

  transform(entireObj:any, key:any): any {

    console.log(entireObj,key,"SWAPNILKAPIPE");

    return null;
  }

}
