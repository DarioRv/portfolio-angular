import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconPipe, MatIcon],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  public networks = cv.socialNetworks;
}
