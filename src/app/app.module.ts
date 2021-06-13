import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { StatusBar } from "@ionic-native/status-bar/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Network } from "@ionic-native/network/ngx";

import { UixModule } from "src/@uix/angular/core";
import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppService } from "./services/app.service";
import { NetworkService } from "./services/network.service";
import { LoaderService } from "./services/loader.service";
import { PrinterService } from "./services/printer.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    UixModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    StatusBar,
    ScreenOrientation,
    Network,
    AppService,
    NetworkService,
    LoaderService,
    PrinterService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
