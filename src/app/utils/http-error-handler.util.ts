import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export function HttpErrorHandler(err : HttpErrorResponse, msg : string, ret : any = []) : Observable<any>  {
  console.error(`ERROR ${err.status}: ${msg}`);

  return new Observable((observer) => {
    observer.next(ret);
    observer.complete();
  });
}