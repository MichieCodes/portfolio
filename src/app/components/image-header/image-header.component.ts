import { Component, Input, OnInit } from '@angular/core';
import { ProjectImage } from 'src/app/models/project';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  @Input() image : ProjectImage | undefined;

  constructor() { }

  ngOnInit() : void {
  }
}
