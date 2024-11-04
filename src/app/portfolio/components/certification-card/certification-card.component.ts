import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Certification } from '@interfaces/certification.interface';

@Component({
  selector: 'certification-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './certification-card.component.html',
  styles: ``,
})
export class CertificationCardComponent {
  public certification = input.required<Certification>();
}
