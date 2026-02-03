import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  updateTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateCanonical(url?: string) {
    const rawUrl = url || this.doc.location.href;

    const canonicalUrl = rawUrl.split('#')[0].split('?')[0];

    let link = this.doc.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }

    link.setAttribute('href', `${canonicalUrl}/`);
  }
}
