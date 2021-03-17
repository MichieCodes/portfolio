import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailSectionComponent implements OnInit {
  @Input() project : Project | undefined;

  constructor() { }

  ngOnInit(): void { }
}
