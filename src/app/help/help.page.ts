import { Component, OnInit } from '@angular/core';
import { IndelecApiService } from '../services/indelec-api.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  public email: string;
  public message: string;
  public success: boolean;

  constructor(
    private translationService: TranslationService,
    private api: IndelecApiService,
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
    this.api.sendMessage({ email: this.email, message: this.message }).subscribe({
      next: () => {
        this.success = true;
      },
      error: () => {
        this.success = false;
      }
    })
    console.log('message sent');
  }

}
