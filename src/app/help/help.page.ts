import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  public email: string;
  public message: string;

  constructor(
    private translationService: TranslationService,
  ) {
    translationService.initLanguage();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (localStorage.getItem('indelec_user_email')) {
      this.email = localStorage.getItem('indelec_user_email');
    }
  }

  sendMessage(): void {
    console.log('message sent');
  }

}
