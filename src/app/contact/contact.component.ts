import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  sendForm(event: SubmitEvent) {
    event.preventDefault();
    if (this.contactForm.valid) {
      console.log('send form');
    }
  }
}
