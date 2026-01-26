import { Component, input } from '@angular/core';
import { Certification } from '@interfaces/certification.interface';
import { IconsModule } from 'app/icons/icons.module';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'certification-card',
  standalone: true,
  imports: [IconsModule, TranslatePipe],
  templateUrl: './certification-card.component.html',
  styles: ``,
})
export class CertificationCardComponent {
  public certification = input.required<Certification>();
}
