import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
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

  success: boolean = false;
  error: boolean = false;

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = new URLSearchParams();
    formData.append('name', this.name.value);
    formData.append('email', this.email.value);
    formData.append('message', this.message.value);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    })
      .then(() => this.showSuccessMessage())
      .catch((error) => this.showErrorMessage());
  }

  showSuccessMessage(): void {
    this.success = true;
    setTimeout(() => {
      this.success = false;
      this.contactForm.reset({
        email: '',
        name: '',
        message: '',
      });
    }, 5000);
  }

  showErrorMessage(): void {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }
}
