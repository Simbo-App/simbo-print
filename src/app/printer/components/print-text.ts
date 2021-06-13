import { Component, Input } from "@angular/core";

import { PrinterService } from "src/app/services/printer.service";

@Component({
  selector: "test-print-text",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Print Text</uix-block-title>
    <uix-block strong>
      <uix-form-field>
        <textarea [(ngModel)]="text" uix-input rows="3" cols="10" id="txtSample"></textarea>
      </uix-form-field>
      <div class="uix-grid grid--2 mg-t-20">
        <uix-form-field>
          <uix-button id="printText" (click)="printText()">Print Text</uix-button>
        </uix-form-field>
        <uix-form-field>
          <uix-button id="printTitle" (click)="printTitle()">Print Title</uix-button>
        </uix-form-field>
      </div>
      <div class="mg-t-20">
        <uix-form-field>
          <uix-button id="printTextSizeAlign" (click)="printTextSizeAlign()">Print TextSizeAlign</uix-button>
        </uix-form-field>
      </div>
    </uix-block>
  `
})
export class TestPrintTextComponent {
  @Input() device: any;

  text = "BTPrinter Plugin Demo » ©2020 Andrés Zsögön";

  constructor(
    private printer: PrinterService
  ) { }

  printText() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    if (!this.text || !this.text.length) {
      alert("Text empty");
      return false;
    }

    this.printer.printText(this.text).then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }

  printTitle() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    if (!this.text || !this.text.length) {
      alert("Text empty");
      return false;
    }

    this.printer.printTitle(this.text, 3, 1).then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }

  printTextSizeAlign() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    if (!this.text || !this.text.length) {
      alert("Text empty");
      return false;
    }

    this.printer.printTextSizeAlign(this.text, 3, 1).then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }
}
