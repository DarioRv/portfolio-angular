import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AnalyticsService } from '@services/analytics.service';
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
  private readonly analyticsService = inject(AnalyticsService);

  copyToClipboard() {
    navigator.clipboard.writeText(this.textToCopy());
    this.analyticsService.event('copy_to_clipboard', {
      text: this.censoredText(),
    });

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

  censoredText(): string {
    const text = this.textToCopy();
    if (text.length <= 8) {
      return '*'.repeat(text.length);
    }
    const start = text.slice(0, 3);
    const end = text.slice(-3);
    const censoredMiddle = '*'.repeat(text.length - 6);
    return `${start}${censoredMiddle}${end}`;
  }
}
