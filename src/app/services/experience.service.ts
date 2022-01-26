import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CheckHttps } from '../utils/detect-protocol';
import { HttpErrorHandler } from '../utils/http-error-handler.util';
import { Experience } from '../models/experience';

const URL : string = CheckHttps() ? 'https://michie-portfolio.netlify.app/skills' : 'http://localhost:8888/skills';

@Injectable({
  providedIn: 'root'
})
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
