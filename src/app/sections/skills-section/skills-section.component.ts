import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route : ActivatedRoute) {
    this.route.data.subscribe((data) => {
      if(data.skills?.length) {
        this.skills = data.skills;
      }
    });
  }

  ngOnInit() : void {}
}
