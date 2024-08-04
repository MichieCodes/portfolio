import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Project } from '../../models/project';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { ParseMarkdownPipe } from '../../pipes/parse-markdown.pipe';

@Component({
  selector: 'app-detail-section',
  standalone: true,
  imports: [SafeUrlPipe, ParseMarkdownPipe],
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DetailSectionComponent {
  @Input() project : Project | undefined;
}
