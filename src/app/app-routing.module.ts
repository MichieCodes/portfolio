import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectResolver } from './resolvers/project.resolver';
import { SkillResolver } from './resolvers/skill.resolver';
import { ScrollBehaviorResolver } from './resolvers/scroll-behavior.resolver';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PortfolioComponent
  },
  {path: 'home', redirectTo: '/#home'},
  {path: 'skills', redirectTo: '/#skills'},
  {path: 'projects', redirectTo: '/#projects'},
  {path: 'about', redirectTo: '/#about'},
  {path: 'contact', redirectTo: '/#contact'},
  {
    path: 'project/:slug',
    component: ProjectDetailComponent,
    resolve: {project: ProjectResolver, scrollBehavior: ScrollBehaviorResolver}
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule],
  providers: [ProjectResolver, SkillResolver, ScrollBehaviorResolver]
})
export class AppRoutingModule { }
