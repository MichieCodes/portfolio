import { Component, OnInit } from '@angular/core';

import { NavLink } from 'src/app/models/nav-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen : boolean = false;
  links : NavLink[] = [
    {title: 'Home', path: ''},
    {title: 'Skills', path: 'skills'},
    {title: 'Projects', path: 'projects'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  constructor() { }

  ngOnInit(): void { }
}
