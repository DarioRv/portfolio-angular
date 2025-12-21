import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'copy-to-clipboard',
  standalone: true,
  imports: [MatIconModule, NgClass, IconsModule],
  templateUrl: './copy-to-clipboard.component.html',
  styles: ``,
})
export class CopyToClipboardComponent {
  textToCopy = input.required<string>();
  label = input<string>();
  icon = signal('copy');
  textHasCopied = signal(false);

  copyToClipboard() {
    navigator.clipboard.writeText(this.textToCopy());

    this.changeIcon();
  }

  changeIcon(): void {
    this.icon.set('check');
    this.textHasCopied.set(true);
    setTimeout(() => {
      this.icon.set('copy');
      this.textHasCopied.set(false);
    }, 3000);
  }
}
