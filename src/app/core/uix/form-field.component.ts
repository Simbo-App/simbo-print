import { Component } from "@angular/core";

@Component({
  selector: "uix-form-field",
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
    }

    :host[field-dropdown]::before {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 50%;
      right: 12px;
      margin-top: -2px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid rgba(0, 0, 0, 0.65);
    }

    :host[block] {
      margin-bottom: 20px;
    }
  `]
})
export class UixFormFieldComponent { }
