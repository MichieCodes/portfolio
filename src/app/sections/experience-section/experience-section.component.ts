import { Component } from '@angular/core';

import { Experience } from '../../models/experience';
import { GetDateRangePipe } from '../../pipes/get-date-range.pipe';
import { ParseMarkdownPipe } from '../../pipes/parse-markdown.pipe';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [GetDateRangePipe, ParseMarkdownPipe],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent {
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
}
