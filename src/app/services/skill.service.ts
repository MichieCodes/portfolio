import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CheckHttps } from '../utils/detect-protocol';
import { HttpErrorHandler } from '../utils/http-error-handler.util';
import { Skill } from '../models/skill';

const URL : string = CheckHttps() ? 'https://michie-portfolio.netlify.app/skills' : 'http://localhost:8888/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills : Skill[] | undefined;

  constructor(private http : HttpClient) { }

  getSkills() : Observable<Skill[]> {
    if(!this.skills) {
      console.log('FROM SERVER: SKILL_LIST');
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
