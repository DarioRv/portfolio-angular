import { Component, input } from '@angular/core';
import { Education } from '@interfaces/education.interface';
import { ImagePipe } from '@pipes/image.pipe';

@Component({
  selector: 'education-card',
  standalone: true,
  imports: [ImagePipe],
  templateUrl: './education-card.component.html',
  styles: ``,
})
export class EducationCardComponent {
  public education = input.required<Education>();
}
