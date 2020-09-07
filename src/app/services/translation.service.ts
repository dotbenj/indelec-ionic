import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';


@Injectable()
export class TranslationService {

  private languages: string[] = ['fr', 'en', 'es', 'pt'];
  public selectedLanguageSubject: Subject<string> = new Subject();
  private selectedLanguage: string;

  constructor(private translate: TranslateService) {
    this.selectedLanguageSubject.subscribe((lang) => {
      switch (lang) {
        case 'fr':
          this.selectedLanguage = 'fr';
          this.translate.setDefaultLang('fr');
          this.translate.use('fr');
          localStorage.setItem('indelec_lang', 'fr');
          break;
        case 'es':
          this.selectedLanguage = 'es';
          this.translate.setDefaultLang('es');
          this.translate.use('es');
          localStorage.setItem('indelec_lang', 'es');
          break;
        case 'pt':
          this.selectedLanguage = 'pt';
          this.translate.setDefaultLang('pt');
          this.translate.use('pt');
          localStorage.setItem('indelec_lang', 'pt');
          break;
        default:
          this.selectedLanguage = 'en';
          this.translate.setDefaultLang('en');
          this.translate.use('en');
          localStorage.setItem('indelec_lang', 'en');
      }
    });
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  getListOfLanguages(): string[] {
    return this.languages;
  }

  initLanguage(): void {
    if (!localStorage.getItem('indelec_lang')) {
      console.log('INIT LANG', navigator.language);
      switch (navigator.language.split('-')[0]) {
        case 'fr':
          this.selectedLanguageSubject.next('fr');
          break;
        case 'en':
          this.selectedLanguageSubject.next('en');
          break;
        case 'es':
          this.selectedLanguageSubject.next('es');
          break;
        case 'pt':
          this.selectedLanguageSubject.next('pt');
          break;
        default:
          this.selectedLanguageSubject.next('en');
      }
    } else {
      this.selectedLanguageSubject.next(localStorage.getItem('indelec_lang'));
    }
  }

}
