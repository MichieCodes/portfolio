import { Component, OnInit } from '@angular/core';

import { ModalInfo } from '../../models/modal-info';
import { ModalComponent } from '../../components/modal/modal.component';
import { HomeSectionComponent } from '../../sections/home-section/home-section.component';
import { SkillsSectionComponent } from '../../sections/skills-section/skills-section.component';
import { ExperienceSectionComponent } from '../../sections/experience-section/experience-section.component';
import { AboutSectionComponent } from '../../sections/about-section/about-section.component';
import { ContactSectionComponent } from '../../sections/contact-section/contact-section.component';
import { ProjectsSectionComponent } from '../../sections/projects-section/projects-section.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ModalComponent,
    HomeSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  modalInfo : ModalInfo | undefined;

  ngOnInit() : void {
    (<HTMLElement>document.body.parentElement).style.scrollBehavior = 'smooth';
  }

  closeModal() {
    this.modalInfo = undefined;
  }
  openModal(modalInfo : ModalInfo) {
    this.modalInfo = modalInfo;
  }
}
