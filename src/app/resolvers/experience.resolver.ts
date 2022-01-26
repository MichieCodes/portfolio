import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ExperienceService } from '../services/experience.service';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceResolver implements Resolve<Experience[]> {
  constructor(private experienceService : ExperienceService) { }

  resolve() : Observable<Experience[]> {
    return this.experienceService.getExperience();
  }
}