import { Component } from "@angular/core";

import imageBase64 from '../test-base64';

@Component({
  selector: "test-print-base64",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Print Base64 Image</uix-block-title>
    <uix-block strong>
      <uix-form-field block>
        <textarea uix-input rows="3" cols="10" id="txtBase64" placeholder="data:image/png;base64,">{{ imageBase64 }}</textarea>
        <label>Base64</label>
      </uix-form-field>
      <uix-form-field>
        <uix-button id="printBase64">Print Base64</uix-button>
      </uix-form-field>
    </uix-block>
  `
})
export class TestPrintBase64Component {
  imageBase64 = imageBase64;
}
