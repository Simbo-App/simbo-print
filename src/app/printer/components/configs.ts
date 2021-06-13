import { Component } from "@angular/core";

@Component({
  selector: "test-configs",
  styleUrls: ['../printer.page.scss'],
  template: `
    <uix-block-title>Printer Settings</uix-block-title>
    <uix-block strong>
      <div class="uix-grid" style="grid-template-columns: 70% 1fr;">
        <uix-form-field>
          <input uix-input type="text" id="txtEncoding" value="ISO-8859-1" size="12" maxlength="64" placeholder="Eg:ISO-8859-1" />
          <label for="txtEncoding">Encoding</label>
          <div class="mg-t-4">
            <small>Default: ISO-8859-1</small>
          </div>
        </uix-form-field>
        <uix-form-field>
          <uix-button id="setEncoding">Set</uix-button>
        </uix-form-field>
      </div>
      <div class="uix-grid grid--2 mg-t-20">
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optAlign">
            <option value="0">ESC_ALIGN_LEFT</option>
            <option value="1">ESC_ALIGN_CENTER</option>
            <option value="2">ESC_ALIGN_RIGHT</option>
          </select>
          <label for="optAlign">Alignment</label>
        </uix-form-field>
        <uix-form-field field-dropdown>
          <select uix-input size="1" id="optSize">
            <option value="00">00: NORMAL</option>
            <option value="01">01: REDUCED</option>
            <option value="10">10: DOUBLE HEIGHT</option>
            <option value="20">20: DOUBLE WIDTH</option>
            <option value="30">30: QUAD AREA</option>
          </select>
          <label for="optSize">Size</label>
        </uix-form-field>
      </div>
      <div class="list simple-list test--list">
        <ul>
          <li>
            <span>Inversed Color</span>
            <span id="invertedIcon" style="display:none;float:right;font-size:24px">#9745</span>
            <label class="toggle toggle-init">
              <input type="checkbox" id="inversedColor" [checked]="false" />
              <span class="toggle-icon"></span>
            </label>
          </li>
        </ul>
      </div>
    </uix-block>
  `
})
export class TestConfigsComponent { }
