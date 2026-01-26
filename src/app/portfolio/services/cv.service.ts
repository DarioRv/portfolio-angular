import { inject, Injectable, computed } from '@angular/core';
import { LanguageService } from './language.service';
import { Language } from '../shared/enums/language.enum';

import cvEs from '@data/cv.es.json';
import cvEn from '@data/cv.en.json';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private languageService = inject(LanguageService);

  readonly cv = computed(() => {
    const lang = this.languageService.language();
    return this.getCvByLang(lang);
  });

  // Accesos directos a secciones del CV
  readonly name = computed(() => this.cv().name);
  readonly summary = computed(() => this.cv().summary);
  readonly about = computed(() => this.cv().about);
  readonly email = computed(() => this.cv().email);
  readonly cvFileUrl = computed(() => this.cv().cvFileUrl);
  readonly socialNetworks = computed(() => this.cv().socialNetworks);
  readonly skills = computed(() => this.cv().skills);
  readonly softSkills = computed(() => this.cv().softSkills);
  readonly experience = computed(() => this.cv().experience);
  readonly projects = computed(() => this.cv().projects);
  readonly education = computed(() => this.cv().education);
  readonly certifications = computed(() => this.cv().certifications);

  getCvByLang(lang: Language) {
    const cvs = {
      es: cvEs,
      en: cvEn,
    };
    return cvs[lang.toLowerCase() as keyof typeof cvs];
  }
}
