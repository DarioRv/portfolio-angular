import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Certification } from '@interfaces/certification.interface';
import { IconsModule } from 'app/icons/icons.module';

@Component({
  selector: 'certification-card',
  standalone: true,
  imports: [IconsModule, UpperCasePipe],
  templateUrl: './certification-card.component.html',
  styles: ``,
})
export class CertificationCardComponent {
  public certification = input.required<Certification>();
}
