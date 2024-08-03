import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text : string, limit : number) : string {
    return text.length > limit ? text.substring(0, limit).trim() + '...' : text;
  }

}
