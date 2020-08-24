import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  public langs: string[];
  public langSelected: string;
  public selectedLanguageSubject: Subject<string>;

  constructor(private translationService: TranslationService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.translationService.initLanguage();
    this.langs = this.translationService.getListOfLanguages();
    this.selectedLanguageSubject = this.translationService.selectedLanguageSubject;
  }
  
  selectLang(lang: string): void {
    this.selectedLanguageSubject.next(lang);
  }

}
