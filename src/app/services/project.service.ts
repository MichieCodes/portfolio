import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HttpErrorHandler } from '../utils/http-error-handler.util';
import { Project } from '../models/project';

const ALL_URL : string = `${environment.API_BASE_URL}/projects`;
const QUERY_URL : string = `${environment.API_BASE_URL}/project?slug=`;

@Injectable({ providedIn: 'root' })
export class ProjectService {
  projects : Project[] | undefined;

  constructor(private http : HttpClient) { }

  getProjects() : Observable<Project[]> {
    if(!this.projects) {
      return this.http.get<Project[]>(ALL_URL).pipe(
        catchError((err : HttpErrorResponse) => HttpErrorHandler(err, 'Could not Retrieve Projects')),
        map((projects : Project[]) => this.projects = projects)
      );
    }

    return new Observable<Project[]>((observer) => {
      observer.next(this.projects);
      observer.complete();
    });
  }

  getProjectBySlug(slug : string) : Observable<Project[]> {
    if(!this.projects) {
      return this.http.get<Project[]>(`${QUERY_URL}${slug}`).pipe(
        catchError((err : HttpErrorResponse) => HttpErrorHandler(err, 'Could not Retrieve Project')),
      );
    }

    let selectedProject = this.projects.find((project : Project) => project.slug == slug);

    return new Observable<Project[]>((observer) => {
      observer.next(selectedProject ? [selectedProject] : []);
      observer.complete();
    });
  }
}
