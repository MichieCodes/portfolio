import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';
import { NonEmptyValidator } from 'src/app/utils/non-empty-validator.util';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  buttonText : 'Submit' | 'Submitting' | 'Submitted' | 'Failed to Submit' = 'Submit';
  contactForm! : FormGroup;

  constructor(private contactService : ContactService, private formBuilder : FormBuilder) { }

  ngOnInit() : void { 
    this.contactForm = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, NonEmptyValidator]),
      email: new FormControl('', Validators.email),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required, NonEmptyValidator])
    });
  }

  get fullName() : FormControl {
    return this.contactForm.get('fullName') as FormControl;
  }
  get email() : FormControl {
    return this.contactForm.get('email') as FormControl;
  }
  get message() : FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  submit() {
    this.buttonText = 'Submitting';

    this.contactService.submit(this.contactForm.value).subscribe((data) => {
      this.buttonText = !data.ok ? 'Failed to Submit' : 'Submitted';

      setTimeout(() => {
        this.buttonText = 'Submit';
        data.ok && this.contactForm.reset();
      }, !data.ok ? 2000 : 1000);
    });
  }
}
