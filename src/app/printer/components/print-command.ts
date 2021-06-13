import { Component } from "@angular/core";

@Component({
  selector: "test-print-command",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Send ESC/POS command</uix-block-title>
    <uix-block strong>
      <uix-form-field block>
        <input uix-input id="txtPOS" value="0A" size="12" maxlength="64">
        <label>Eg:0A</label>
        <div class="mg-t-4">
            <small>0A = LF</small>
          </div>
      </uix-form-field>
      <uix-form-field>
        <uix-button id="printPOSCommand">Print POS Command</uix-button>
      </uix-form-field>
    </uix-block>
  `
})
export class TestPrintCommandComponent { }
