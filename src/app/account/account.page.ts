import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public email: string;
  public newsSub = false;

  constructor(
    private translationService: TranslationService,
    private router: Router,
  ) {
    translationService.initLanguage();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.email = localStorage.getItem('indelec_user_email') ? localStorage.getItem('indelec_user_email') : null;
    if (localStorage.getItem('indelec_newsletter_subscription') === 'true') {
      this.newsSub = true;
    } else {
      this.newsSub = false;
    }
  }

  changeInfos() {
    this.router.navigate(['/subscribe', { edit: true }]);
  }

}
