import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { HttpErrorHandler } from '../utils/http-error-handler.util';
import { Skill } from '../models/skill';

const URL : string = `${environment.API_BASE_URL}/skills`;

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills : Skill[] | undefined;

  constructor(private http : HttpClient) { }

  getSkills() : Observable<Skill[]> {
    if(!this.skills) {
      return this.http.get<Skill[]>(URL).pipe(
        catchError((err : HttpErrorResponse) => HttpErrorHandler(err, 'Could not Retrieve Skills')),
        map((skills : Skill[]) => this.skills = skills)
      );
    }

    return new Observable<Skill[]>((observer) => {
      observer.next(this.skills);
      observer.complete();
    });
  }
}
