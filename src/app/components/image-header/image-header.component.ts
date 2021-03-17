import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectImage } from 'src/app/models/project';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss']
})
export class ImageHeaderComponent implements OnInit {
  @Input() image : ProjectImage | undefined;

  constructor(private router : Router) { }

  ngOnInit() : void {
  }

  back() : void {
    this.router.navigateByUrl("/#skills");
    setTimeout(() => {
      this.router.navigateByUrl("#projects");
    }, 10);
  }
}
