import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { SkillService } from '../services/skill.service';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillResolver implements Resolve<Skill[]> {
  constructor(private skillService : SkillService) { }

  resolve() : Observable<Skill[]> {
    return this.skillService.getSkills();
  }
}