import { Component, inject, OnInit } from '@angular/core';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import cv from '@data/cv.json';
import { Education } from '@interfaces/education.interface';
import { CertificationCardComponent } from '@components/certification-card/certification-card.component';
import { Certification } from '@interfaces/certification.interface';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'education',
  standalone: true,
  imports: [
    EducationCardComponent,
    CertificationCardComponent,
    DecorationComponent,
  ],
  templateUrl: './education.component.html',
  styles: ``,
})
export class EducationComponent implements OnInit {
  public education: Education[] = cv.education;
  public certifications: Certification[] = cv.certifications;
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateTitle('Educación - Darío Vidal');
    this.seoService.updateDescription(
      'Descubre mi formación académica y certificaciones en tecnologías como Angular, NestJS, Spring, entre otras.',
    );
    this.seoService.updateCanonical();
  }
}
