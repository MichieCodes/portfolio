import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { inject } from '@angular/core';

import { clock } from './utils/clock';
import { ProjectService } from './services/project.service';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Portfolio | Michelle',
    component: PortfolioComponent
  },
  {path: 'home', redirectTo: '/#home'},
  {path: 'skills', redirectTo: '/#skills'},
  {path: 'experience', redirectTo: '/#experience'},
  {path: 'projects', redirectTo: '/#projects'},
  {path: 'about', redirectTo: '/#about'},
  {path: 'contact', redirectTo: '/#contact'},
  {
    path: 'project/:slug',
    component: ProjectDetailComponent,
    resolve: {
      project: (route: ActivatedRouteSnapshot) =>
        inject(ProjectService).getProjectBySlug(route.paramMap.get('slug')!),
      scrollBehavior: async () => {
        (<HTMLElement>document.body.parentElement).style.scrollBehavior = 'unset';
        await clock(0);
      }
    }
  },
  {
    path: '**',
    title: '404 | Page Not Found',
    component: PageNotFoundComponent
  }
];
