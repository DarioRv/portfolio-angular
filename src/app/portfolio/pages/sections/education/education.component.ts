import { Component } from '@angular/core';
import { EducationCardComponent } from '../../../components/education-card/education-card.component';
import cv from '@data/cv.json';
import { Education } from '@interfaces/education.interface';
import { CertificationCardComponent } from '@components/certification-card/certification-card.component';
import { Certification } from '@interfaces/certification.interface';
import { IconsModule } from 'app/icons/icons.module';
import { expandListAnim } from 'app/portfolio/shared/utils/animations';

@Component({
  selector: 'dv-education',
  standalone: true,
  imports: [EducationCardComponent, CertificationCardComponent, IconsModule],
  templateUrl: './education.component.html',
  animations: [expandListAnim],
})
export class EducationComponent {
  public education: Education[] = cv.education;
  public certifications: Certification[] = cv.certifications;

  visibleCount = 2;

  get visibleCertifications() {
    return this.certifications.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount = this.certifications.length;
  }

  showLess() {
    this.visibleCount = 2;
  }

  get hasMore() {
    return this.visibleCount < this.certifications.length;
  }
}
