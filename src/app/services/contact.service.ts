import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ContactForm } from '../models/contact-form';
import { FormspreeResponse } from '../models/formspree-response';
import { HttpErrorHandler } from '../utils/http-error-handler.util';

const URL = 'https://formspree.io/f/xpzogvko';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http : HttpClient) { }

  submit(formData : ContactForm) : Observable<FormspreeResponse> {
    return this.http.post<FormspreeResponse>(URL, formData).pipe(
      catchError((err : HttpErrorResponse) => HttpErrorHandler(err, 'Could not Send Message', {ok: false}))
    );
  }
}
