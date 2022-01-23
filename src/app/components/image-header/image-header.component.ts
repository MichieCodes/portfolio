import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirtableImage } from 'src/app/models/airtable-image';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  @Input() image : AirtableImage | undefined;

  constructor(private router : Router) { }

  ngOnInit() : void { }

  back() : void {
    this.router.navigateByUrl('/#projects');

    setTimeout(() => {
      let el = (<HTMLElement>document.getElementById('projects'));
      el && el.scrollIntoView();
    }, 10);
  }
}
