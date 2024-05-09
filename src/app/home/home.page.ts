import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions as ImportedInAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
declare global {
  interface Navigator {
    app: any;
  }
}
interface InAppBrowserOptions {
  location: 'yes' | 'no' | undefined;
  toolbar: 'yes' | 'no' | undefined;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(private iab: InAppBrowser, private platform: Platform) {
     this.platform.backButton.subscribeWithPriority(10, () => {
       navigator['app'].exitApp();
     });
   }
 ngOnInit() {
      this.openUrl();
    }

    openUrl() {
      const url = 'https://staging.alwataneya.ae/mobile';
      const options: InAppBrowserOptions = {
        location: 'no',
        toolbar: 'no'
      };
      const browser = this.iab.create(url, '_blank', options);
    }
}
