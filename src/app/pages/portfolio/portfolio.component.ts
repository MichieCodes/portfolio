import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ModalInfo } from 'src/app/models/modal-info';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  modalInfo : ModalInfo | undefined;
  
  constructor(private titleService : Title) { }
  
  ngOnInit() : void {
    (<HTMLElement>document.body.parentElement).style.scrollBehavior = 'smooth';
    this.titleService.setTitle('Portfolio | Michelle');
  }

  closeModal() {
    this.modalInfo = undefined;
  }
  openModal(modalInfo : ModalInfo) {
    this.modalInfo = modalInfo;
  }
}
