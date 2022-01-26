import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from 'src/app/models/project';
import { ModalInfo } from 'src/app/models/modal-info';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  @Output() openModal : EventEmitter<ModalInfo> = new EventEmitter();

  projects : Project[] | undefined;
  loading : boolean = true;

  constructor(private projectService : ProjectService) {
    this.projectService.getProjects().subscribe((projects) => {
      if(projects?.length) {
        this.projects = projects;
      }

      this.loading = false;
    });
  }

  ngOnInit() : void { }

  onOpenModal(type : 'video' | 'image', project : Project) : void {
    let url = (type === 'video' ? project.videoLink : project.image?.full.url) || '';
    if(!url) return;

    this.openModal.emit({type, title: project.title, url});
  }
}
