import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceSectionComponent implements OnInit {
  experienceList : Experience[] | undefined;
  loading : boolean = true;

  constructor(private experienceService : ExperienceService) {
    this.experienceService.getExperience().subscribe((experience) => {
      if(experience?.length) {
        this.experienceList = experience;
      }

      this.loading = false;
    });
  }

  ngOnInit(): void { }
}
