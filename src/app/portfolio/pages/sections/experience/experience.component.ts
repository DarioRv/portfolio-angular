import { Component } from '@angular/core';
import { ExperienceItemComponent } from '@components/experience-item/experience-item.component';
import cv from '@data/cv.json';

@Component({
  selector: 'dv-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styles: ``,
})
export class ExperienceComponent {
  public experiences = cv.experience;
}
