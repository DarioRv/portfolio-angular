import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import cv from '@data/cv.json';
import { IconPipe } from '@pipes/icon.pipe';
import { DecorationComponent } from '../../components/decoration/decoration.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IconPipe, MatIcon, DecorationComponent],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  public networks = cv.socialNetworks;
}
