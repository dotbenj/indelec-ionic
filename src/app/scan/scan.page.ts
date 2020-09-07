import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NFC, NfcUtil } from '@ionic-native/nfc/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  public step = 'loading';
  public count: number;
  public time: Date;
  public lat: number;
  public lng: number;
  public geoError = false;
  public arrayByte = '';

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

  ionViewWillEnter() {
    this.nfc.connect('android.nfc.tech.NfcV', 200).then(
      () => {
        this.nfc.transceive('00 23 00 08').then(
          (result) => {
            this.arrayByte = this.util.arrayBufferToHexString(result);
            if (this.arrayByte[8] && this.arrayByte[9]) {
              const countNumberHex: any = Number('0x' + this.arrayByte[8] + this.arrayByte[9]);
              this.count = parseInt(countNumberHex, 10) > 99 ? 99 : parseInt(countNumberHex, 10);
              this.time = new Date();
              this.goelocation.getCurrentPosition().then(
                (geo) => {
                  this.lat = geo.coords.latitude;
                  this.lng = geo.coords.longitude;
                },
                (error) => {
                  console.log('geo error', error);
                  this.geoError = true;
                }
              );
              this.step = 'success';
            } else {
              console.log('Error in array', this.arrayByte);
              this.step = 'error';
            }
          },
          (error) => {
            console.log('error transceive', error);
            this.step = 'error';
          }
        );
      },
      (error) => {
        console.log('connect error', error);
        this.step = 'error';
      }
    );
  }

  newScan() {
    this.router.navigate(['home']);
  }

}
