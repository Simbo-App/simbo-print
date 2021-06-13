import { Component } from "@angular/core";

@Component({
  selector: "test-methods",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Test Methods</uix-block-title>
    <uix-block strong>
      <uix-form-field class="mg-b-20">
        <uix-button id="printGreek">Ελληνικά Test</uix-button>
      </uix-form-field>
      <div class="uix-grid grid--3">
        <uix-form-field>
          <uix-button id="lineFeed">Line Feed</uix-button>
        </uix-form-field>
        <uix-form-field>
          <uix-button id="fontDemo">Font Demo</uix-button>
        </uix-form-field>
        <uix-form-field>
          <uix-button id="sizeDemo">Size Demo</uix-button>
        </uix-form-field>
      </div>
      <div class="uix-grid grid--2 mg-t-20">
        <uix-form-field>
          <uix-button id="beepX1">Beep 1x</uix-button>
        </uix-form-field>
        <uix-form-field>
          <uix-button id="beepX3">Beep 3x</uix-button>
        </uix-form-field>
      </div>
    </uix-block>
  `
})
export class TestMethodsComponent {
  constructor() { }
}
