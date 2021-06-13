import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  template: `
    <uix-app>
      <uix-statusbar></uix-statusbar>
      <uix-view></uix-view>
      <app-loader></app-loader>
    </uix-app>
  `
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.statusBar.styleLightContent();
        this.screenOrientation.lock(
          this.screenOrientation.ORIENTATIONS.PORTRAIT
        );
      }
    });
  }
}
