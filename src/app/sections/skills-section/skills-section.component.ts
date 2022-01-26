import { Component, OnInit } from '@angular/core';

import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
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

  ngOnInit() : void { }
}
