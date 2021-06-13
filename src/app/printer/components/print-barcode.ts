import { Component } from "@angular/core";

@Component({
  selector: "test-print-barcode",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Print Barcode</uix-block-title>
    <uix-block strong>
      <uix-form-field block>
        <input uix-input type="text" id="txtBarcode" maxlength="64" placeholder="Eg: 012345678901" />
        <label>Text / number</label>
      </uix-form-field>
      <uix-form-field field-dropdown block>
        <select uix-input size="1" id="optBCSystem">
          <option value="0">0: UPC-A</option>
          <option value="1">1: UPC-E</option>
          <option value="2" selected="selected">2: EAN13 / JAN13</option>
          <option value="3">3: EAN8 / JAN8</option>
          <option value="4">4: CODE39</option>
          <option value="5">5: ITF</option>
          <option value="6">6: CODABAR</option>
        </select>
        <label>Barcode system</label>
      </uix-form-field>
      <uix-form-field field-dropdown>
        <select uix-input size="1" id="optBCPosition">
          <option value="0">Not printed</option>
          <option value="1">Above barcode</option>
          <option value="2" selected="selected">Below barcode</option>
          <option value="3">Above and below barcode</option>
        </select>
        <label>HRI characters position</label>
      </uix-form-field>
      <div class="uix-grid grid--2 mg-t-20">
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optBCFont">
            <option value="0" selected="selected">0: FONT A</option>
            <option value="1">1: FONT B</option>
            <option value="2">2: FONT C</option>
            <option value="3">3: FONT D</option>
            <option value="4">4: FONT E</option>
          </select>
          <label>Font selection</label>
        </uix-form-field>
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optBCHeight">
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64" selected="selected">64</option>
            <option value="128">128</option>
            <option value="192">192</option>
          </select>
          <label>Barcode height</label>
        </uix-form-field>
      </div>
      <uix-form-field class="mg-t-20">
        <uix-button id="printBarcode">Print Barcode</uix-button>
      </uix-form-field>
    </uix-block>
  `
})
export class TestPrintBarcodeComponent { }
