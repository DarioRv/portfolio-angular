import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconPipe, MatIcon, DecorationComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent implements OnInit {
  public networks = cv.socialNetworks;
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle('Contacto - Darío Vidal');
    this.seoService.updateDescription(
      'Ponte en contacto conmigo a través de mis redes sociales o envíame un correo electrónico. ¡Estoy abierto a nuevas oportunidades y colaboraciones!',
    );
    this.seoService.updateCanonical();
  }
}
