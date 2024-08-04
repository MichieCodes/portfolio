import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Skill } from '../../models/skill';
import { FilterByCategoryPipe } from '../../pipes/filter-by-category.pipe';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [FormsModule, FilterByCategoryPipe],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  skills : Skill[] | undefined;
  categories : string[] = ['All', 'Languages', 'Frameworks', 'OS', 'Databases', 'Other'];
  selectedCategory : string = this.categories[0];

  loading : boolean = true;

  constructor(private skillsService : SkillService) {
    this.skillsService.getSkills().subscribe((skills) => {
      if(skills?.length) {
        this.skills = skills;
      }

      this.loading = false;
    });
  }
}
