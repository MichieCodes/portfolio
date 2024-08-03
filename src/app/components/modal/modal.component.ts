import { Component, ElementRef, EventEmitter, Input, Output, viewChild } from '@angular/core';

import { ModalInfo } from '../../models/modal-info';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { AnimateElement } from '../../utils/animate-element';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() info! : ModalInfo;
  @Output() close : EventEmitter<void> = new EventEmitter();
  modal = viewChild<ElementRef>('Modal');
  overlay = viewChild<ElementRef>('Overlay');

  onClose() {
    AnimateElement(this.modal()?.nativeElement, () => {
      AnimateElement(this.overlay()?.nativeElement, () => this.close.emit(), 'overlay-fade-out');
    }, 'modal-fade-out');
  }
}
