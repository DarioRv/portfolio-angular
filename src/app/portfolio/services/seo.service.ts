import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  updateTitle(newTitle: string) {
    this.title.setTitle(newTitle);
    this.meta.updateTag({ property: 'og:title', content: newTitle });
    this.meta.updateTag({ property: 'twitter:title', content: newTitle });
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
    this.meta.updateTag({ property: 'og:description', content: desc });
    this.meta.updateTag({ property: 'twitter:description', content: desc });
  }

  updateOgUrl(path?: string) {
    const origin = this.baseUrl;
    const url = `${origin}${path}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'twitter:url', content: url });
  }

  updateOgImage(imageUrl: string) {
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'twitter:image', content: imageUrl });
  }

  updateCanonical(path: string) {
    const origin = this.baseUrl;

    // let cleanPath = path ? path : this.doc.location.pathname;

    // // quitar query y hash si vienen
    // cleanPath = cleanPath.split('?')[0].split('#')[0];

    // remover trailing slash (excepto para la raíz "/")
    // if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    //   cleanPath = cleanPath.slice(0, -1);
    // }

    const canonicalUrl = `${origin}${path}`;

    // Update canonical link
    let link = this.doc.querySelector<HTMLLinkElement>("link[rel='canonical']");

    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }

    link.setAttribute('href', canonicalUrl);

    // Update Open Graph and Twitter URLs
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'twitter:url', content: canonicalUrl });
  }
}
