import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact.service';
import { NonEmptyValidator } from '../../utils/non-empty-validator.util';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  buttonText : 'Submit' | 'Submitting' | 'Submitted' | 'Failed to Submit' = 'Submit';
  disabledButtons = ['Submitting', 'Submitted'];
  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, NonEmptyValidator]),
    email: new FormControl('', Validators.email),
    subject: new FormControl(''),
    message: new FormControl('', [Validators.required, NonEmptyValidator])
  });

  constructor(private contactService : ContactService) { }

  get fullName() : FormControl {
    return this.contactForm.get('fullName') as FormControl;
  }
  get email() : FormControl {
    return this.contactForm.get('email') as FormControl;
  }
  get message() : FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  get isDisabled() {
    return this.disabledButtons.includes(this.buttonText) || this.contactForm.invalid;
  }

  submit() {
    this.buttonText = 'Submitting';

    if(this.contactForm.invalid) {
      this.buttonText = 'Submit';
    }

    this.contactService.submit(this.contactForm.value as ContactForm).subscribe((data) => {
      this.buttonText = !data.ok ? 'Failed to Submit' : 'Submitted';

      setTimeout(() => {
        this.buttonText = 'Submit';
        data.ok && this.contactForm.reset({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      }, !data.ok ? 2000 : 1000);
    });
  }
}
