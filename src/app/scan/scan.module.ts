import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { NFC, NfcUtil } from '@ionic-native/nfc/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ScanPageRoutingModule } from './scan-routing.module';

import { ScanPage } from './scan.page';

import { TranslationService } from '../services/translation.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPageRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
  ],
  declarations: [ScanPage],
  providers: [
    Geolocation,
    NFC,
    NfcUtil,
    TranslationService,
    Screenshot,
    SocialSharing,
  ]
})
export class ScanPageModule {}
