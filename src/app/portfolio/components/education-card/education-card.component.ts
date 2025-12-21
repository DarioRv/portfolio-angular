import { Component, input } from '@angular/core';
import { Education } from '@interfaces/education.interface';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'education-card',
  standalone: true,
  imports: [IconsModule],
  templateUrl: './education-card.component.html',
  styles: ``,
})
export class EducationCardComponent {
  public education = input.required<Education>();
}
