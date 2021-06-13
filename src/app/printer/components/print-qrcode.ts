import { Component } from "@angular/core";

@Component({
  selector: "test-print-qrcode",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Print QR Code</uix-block-title>
    <uix-block strong>
      <uix-form-field>
        <textarea uix-input rows="3" cols="10" id="txtQRData">http://www.andreszsogon.com/</textarea>
        <label>QR Code data</label>
      </uix-form-field>
      <div class="uix-grid grid--2 mg-t-20 mg-b-20">
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optQRModel">
            <option value="49" selected="selected">MODEL 1</option>
            <option value="50">MODEL 2</option>
            <option value="51">MICRO QR</option>
          </select>
          <label>QR code model</label>
        </uix-form-field>
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optQRSize">
            <option value="8">8: SMALL</option>
            <option value="32" selected="selected">32: MEDIUM</option>
            <option value="48">48: LARGE</option>
            <option value="64">64: X-LARGE</option>
          </select>
          <label>QR code size</label>
        </uix-form-field>
      </div>
      <uix-form-field field-dropdown block>
        <select uix-input size="1" id="optQREclevel">
          <option value="48">RECOVERY CAPACITY 7%</option>
          <option value="49">RECOVERY CAPACITY 15%</option>
          <option value="50" selected="selected">RECOVERY CAPACITY 25%</option>
          <option value="51">RECOVERY CAPACITY 30%</option>
        </select>
        <label>Error correction level</label>
      </uix-form-field>
      <uix-form-field>
        <uix-button id="printQRCode">Print QRCode</uix-button>
      </uix-form-field>
    </uix-block>
  `
})
export class TestPrintQRcodeComponent { }
