import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private iab: InAppBrowser) {}
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
