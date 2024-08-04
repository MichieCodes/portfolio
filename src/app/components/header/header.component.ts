import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavLink } from '../../models/nav-link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen : boolean = false;
  links : NavLink[] = [
    {title: 'Home', path: ''},
    {title: 'Skills', path: 'skills'},
    {title: 'Experience', path: 'experience'},
    {title: 'Projects', path: 'projects'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];
}
