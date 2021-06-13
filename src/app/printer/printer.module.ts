
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from 'src/app/core/core.module';

import { PrinterPage } from './printer.page';
import { TestPrintQRcodeComponent } from './components/print-qrcode';
import { TestPrintBarcodeComponent } from './components/print-barcode';
import { TestMethodsComponent } from './components/methods';
import { TestConfigsComponent } from './components/configs';
import { TestPrintTextComponent } from './components/print-text';
import { TestPrintCommandComponent } from './components/print-command';
import { TestPrintBase64Component } from './components/print-base64';

@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PrinterPage
      }
    ])
  ],
  declarations: [
    PrinterPage,
    TestMethodsComponent,
    TestConfigsComponent,
    TestPrintTextComponent,
    TestPrintQRcodeComponent,
    TestPrintBarcodeComponent,
    TestPrintBase64Component,
    TestPrintCommandComponent
  ]
})
export class PrinterPageModule { }
