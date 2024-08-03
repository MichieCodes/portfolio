import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Project } from '../../models/project';
import { ModalInfo } from '../../models/modal-info';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [RouterLink, TruncatePipe],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
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

  onOpenModal(type : 'video' | 'image', project : Project) : void {
    let url = (type === 'video' ? project.videoLink : project.image?.full.url) || '';
    if(!url) return;

    this.openModal.emit({type, title: project.title, url});
  }
}
