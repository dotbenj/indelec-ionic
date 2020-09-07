import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TranslationService } from '../services/translation.service';

import { NFC, NfcUtil } from '@ionic-native/nfc/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public homeStep = 'start';
  public count: string;
  public time: Date;
  public lat: number;
  public lng: number;
  public geoError = false;

  constructor(
    private nfc: NFC,
    private util: NfcUtil,
    private goelocation: Geolocation,
    private translationService: TranslationService,
    private router: Router,
  ) {
    this.translationService.initLanguage();
  }

  ngOnInit() {
  }

  startScan(): void {
    this.homeStep = 'waiting';
    this.nfc.readerMode(this.nfc.FLAG_READER_NFC_V).subscribe(
      async (nfcEvent) => {
        console.log('reader mode success');
        this.router.navigate(['scan']);
      }, (error) => {
        console.log('Error readerMode', error);
        this.homeStep = 'error';
      }
    );
  }

  newScan(): void {
    this.homeStep = 'start';
  }

}
