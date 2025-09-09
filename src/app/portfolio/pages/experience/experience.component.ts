import { Component } from '@angular/core';
import { DecorationComponent } from '@components/decoration/decoration.component';
import { ExperienceItemComponent } from '@components/experience-item/experience-item.component';
import cv from '@data/cv.json';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [DecorationComponent, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  public experiences = cv.experience;
}
