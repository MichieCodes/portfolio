import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from 'src/app/models/project';
import { ModalInfo } from 'src/app/models/modal-info';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  @Output() openModal : EventEmitter<ModalInfo> = new EventEmitter();

  projects : Project[] | undefined;

  constructor(private route : ActivatedRoute) {
    this.route.data.subscribe((data) => {
      if(data.projects?.length) {
        this.projects = data.projects;
      }
    });
  }

  ngOnInit() : void { }

  onOpenModal(type : 'video' | 'image', project : Project) : void {
    let url = (type === 'video' ? project.videoLink : project.image?.full.url) || '';
    if(!url) return;

    this.openModal.emit({type, title: project.title, url});
  }
}
