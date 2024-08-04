import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HttpErrorHandler } from '../utils/http-error-handler.util';
import { Experience } from '../models/experience';

const URL : string = `${environment.API_BASE_URL}/experience`;

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  experience : Experience[] | undefined;

  constructor(private http : HttpClient) { }

  getExperience() : Observable<Experience[]> {
    if(!this.experience) {
      return this.http.get<Experience[]>(URL).pipe(
        catchError((err : HttpErrorResponse) => HttpErrorHandler(err, 'Could not Retrieve Experience')),
        map((experience: Experience[]) => this.experience = experience)
      );
    }

    return new Observable<Experience[]>((observer) => {
      observer.next(this.experience);
      observer.complete();
    })
  }
}
