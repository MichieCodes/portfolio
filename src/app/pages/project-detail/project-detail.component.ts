import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../../models/project';
import { ImageHeaderComponent } from '../../components/image-header/image-header.component';
import { DetailSectionComponent } from '../../sections/detail-section/detail-section.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ImageHeaderComponent, DetailSectionComponent],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project : Project | undefined;

  constructor(private titleService: Title, private route : ActivatedRoute, private router: Router) {
    this.route.data.subscribe((data) => {
      if(!data['project'].length) this.router.navigateByUrl('/page-not-found', {skipLocationChange: true});
      else this.project = data['project'][0];
    });
  }

  ngOnInit() : void {
    this.titleService.setTitle(`Project | ${this.project?.title || 'Untitled'}`);
  }
}
