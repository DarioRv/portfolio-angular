import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  public contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    ],
  });

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
  }
}
