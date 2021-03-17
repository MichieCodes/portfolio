import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project : Project | undefined;

  constructor(private titleService: Title, private route : ActivatedRoute, private router: Router) {
    this.route.data.subscribe((data) => {
      if(!data.project.length) this.router.navigateByUrl('/page-not-found', {skipLocationChange: true});
      else this.project = data.project[0];
    });
  }

  ngOnInit() : void {
    this.titleService.setTitle(`Project | ${this.project?.title || 'Untitled'}`);
  }
  
}
