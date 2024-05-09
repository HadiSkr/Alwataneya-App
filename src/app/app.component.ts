import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('start')
  }
}
