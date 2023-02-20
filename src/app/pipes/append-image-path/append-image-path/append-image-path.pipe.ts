import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendImagePath',
  // pure:false
})
export class AppendImagePathPipe implements PipeTransform {

  transform(path:string, image_name:string): any {
    // return null;
    console.log(path,image_name);
    return path + image_name;

  }

}
