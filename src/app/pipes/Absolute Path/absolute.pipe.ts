import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constants/routes'

@Pipe({
  name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {

  transform(route:any): any {
    // @ts-ignore
      return routes[route].fullurl

       ;
    }

}
