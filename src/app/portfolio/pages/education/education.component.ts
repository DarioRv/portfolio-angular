import { Component, inject, OnInit } from '@angular/core';
import { EducationCardComponent } from '../../components/education-card/education-card.component';
import cv from '@data/cv.json';
import { Education } from '@interfaces/education.interface';
import { CertificationCardComponent } from '@components/certification-card/certification-card.component';
import { Certification } from '@interfaces/certification.interface';
import { DecorationComponent } from '../../components/decoration/decoration.component';
import { Meta } from '@angular/platform-browser';

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
  private readonly meta = inject(Meta);
  public education: Education[] = cv.education;
  public certifications: Certification[] = cv.certifications;

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Conoce más sobre mi formación académica y certificaciones, que me han permitido adquirir habilidades y conocimientos en el mundo de la programación y la tecnología.',
    });
  }
}
