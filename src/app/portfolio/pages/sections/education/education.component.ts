import { Component } from '@angular/core';
import { EducationCardComponent } from '../../../components/education-card/education-card.component';
import cv from '@data/cv.json';
import { Education } from '@interfaces/education.interface';
import { CertificationCardComponent } from '@components/certification-card/certification-card.component';
import { Certification } from '@interfaces/certification.interface';

@Component({
  selector: 'dv-education',
  standalone: true,
  imports: [EducationCardComponent, CertificationCardComponent],
  templateUrl: './education.component.html',
  styles: ``,
})
export class EducationComponent {
  public education: Education[] = cv.education;
  public certifications: Certification[] = cv.certifications;
}
