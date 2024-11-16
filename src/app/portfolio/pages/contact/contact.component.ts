import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  public name = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public message = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(500),
  ]);

  success: boolean = false;
  error: boolean = false;

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.name.invalid || this.email.invalid || this.message.invalid) {
      this.name.markAsTouched();
      this.email.markAsTouched();
      this.message.markAsTouched();
      return;
    }

    const formData = new URLSearchParams();
    formData.append('name', this.name.value!);
    formData.append('email', this.email.value!);
    formData.append('message', this.message.value!);

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
      this.resetForm();
    }, 5000);
  }

  showErrorMessage(): void {
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 5000);
  }

  resetForm(): void {
    this.name.reset();
    this.email.reset();
    this.message.reset();
  }
}
