import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent { }
