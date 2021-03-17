import { Pipe, PipeTransform } from '@angular/core';
import { CheckHttps } from '../utils/detect-protocol';

@Pipe({
  name: 'pathResolver'
})
export class PathResolverPipe implements PipeTransform {
  transform(path: string) : string {
    return CheckHttps() ? path.replace(/.+?assets/i, './assets') : path;
  }
}
