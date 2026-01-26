import { inject, Injectable, signal, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../shared/enums/language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translateService = inject(TranslateService);
  private currentLanguage = signal<Language>(Language.ES);
  private supportedLanguages: Language[] = [Language.ES, Language.EN];

  readonly language = this.currentLanguage.asReadonly();
  readonly isSpanish = computed(() => this.currentLanguage() === Language.ES);
  readonly isEnglish = computed(() => this.currentLanguage() === Language.EN);

  changeLanguage(lang: Language) {
    if (this.supportedLanguages.includes(lang)) {
      this.currentLanguage.set(lang);
      this.translateService.use(lang);
    }
  }

  toggleLanguage() {
    const newLang =
      this.currentLanguage() === Language.ES ? Language.EN : Language.ES;
    this.changeLanguage(newLang);
  }
}
