import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project[]> {
  constructor(private projectService : ProjectService) { }

  resolve(route: ActivatedRouteSnapshot) : Observable<Project[]> {
    let slug : string | null = route.paramMap.get('slug');

    if(!slug) return this.projectService.getProjects();
    
    return this.projectService.getProjectBySlug(slug);
  }
}