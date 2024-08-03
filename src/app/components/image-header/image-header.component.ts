import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AirtableImage } from '../../models/airtable-image';

@Component({
  selector: 'app-image-header',
  standalone: true,
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent {
  @Input() image : AirtableImage | undefined;

  constructor(private router : Router) { }

  back() : void {
    this.router.navigateByUrl('/#projects');

    setTimeout(() => {
      let el = (<HTMLElement>document.getElementById('projects'));
      el && el.scrollIntoView();
    }, 10);
  }
}
