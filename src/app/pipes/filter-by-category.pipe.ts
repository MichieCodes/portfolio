import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../models/skill';

@Pipe({
  standalone: true,
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(skills: Skill[], category: string): Skill[] {
    if(category === 'All') return skills;
    return skills.filter((skill) => skill.category.includes(category));
  }

}
