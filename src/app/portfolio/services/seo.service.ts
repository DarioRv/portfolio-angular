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
    const canonicalUrl = (url || this.doc.URL) + '/';

    let link: HTMLLinkElement =
      this.doc.querySelector("link[rel='canonical']") ||
      this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);

    if (!link.parentNode) {
      this.doc.head.appendChild(link);
    }
  }
}
