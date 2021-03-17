import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { ModalInfo } from 'src/app/models/modal-info';
import { AnimateElement } from 'src/app/utils/animate-element';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() info! : ModalInfo;
  @Output() close : EventEmitter<void> = new EventEmitter();
  @ViewChild('Modal') Modal! : ElementRef;
  @ViewChild('Overlay') Overlay! : ElementRef;
  
  constructor() { }

  ngOnInit() : void { }

  onClose() {
    AnimateElement(this.Modal.nativeElement, () => {
      AnimateElement(this.Overlay.nativeElement, () => this.close.emit(), 'overlay-fade-out');
    }, 'modal-fade-out');
  }
}
