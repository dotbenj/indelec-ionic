import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  public email: string;
  public newsSub = false;
  public errorMessage: string;

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    translationService.initLanguage();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.paramMap.subscribe(params => {
        if (!params.get('edit')) {
          const email = localStorage.getItem('indelec_user_email');
          if (email) {
            this.router.navigate(['/home']);
          }
        } else {
          if (localStorage.getItem('indelec_user_email')) {
            this.email = localStorage.getItem('indelec_user_email');
          }
          if (localStorage.getItem('indelec_newsletter_subscription')) {
            this.newsSub = localStorage.getItem('indelec_newsletter_subscription') === 'true' ? true : false;
          }
        }
      });
  }

  sendEmail(): void {
    if (this.email && this.email !== '') {
      localStorage.setItem('indelec_user_email', this.email);
      console.log('this.newsSub', this.newsSub);
      localStorage.setItem('indelec_newsletter_subscription', this.newsSub ? 'true' : 'false');
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'ERROR_EMAIL';
    }
  }

  skipEmail(): void {
    this.router.navigate(['/home']);
  }

}
