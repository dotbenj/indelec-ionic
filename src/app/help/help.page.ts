import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private translationService: TranslationService) {
    translationService.initLanguage();
  }

  ngOnInit() {
  }

}
