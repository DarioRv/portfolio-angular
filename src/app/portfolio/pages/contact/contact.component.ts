import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconPipe, MatIcon, DecorationComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent implements OnInit {
  private readonly meta = inject(Meta);
  public networks = cv.socialNetworks;

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Contactame a través enviandome un correo electrónico o conecta conmigo en LinkedIn',
    });
  }
}
