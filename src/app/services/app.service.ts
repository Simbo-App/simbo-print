import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";

import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AlertController } from "src/@uix/angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(
    private platform: Platform,
    private statusbar: StatusBar,
    private alert: AlertController,
    private router: Router
  ) { }

  isAndroid(): boolean {
    return this.platform.is("android");
  }

  isIos(): boolean {
    return this.platform.is("ios");
  }

  isCordova(): boolean {
    return this.platform.is("cordova");
  }

  logout() {
    this.alert
      .fire({
        title: "Se déconnecter ?",
        text: "Toutes les collectes non syncronisées seront effacées.",
        showCancelButton: true,
        confirmButtonText: "Se déconnecter",
        cancelButtonText: "Non"
      })
      .then(result => {
        if (result.value) {
          this.router.navigate(["/login"]);
        }
      });
  }

  resetStatusbar() {
    this.statusbar.styleLightContent();
    this.statusbar.backgroundColorByHexString("#1b2e42");
  }
}
