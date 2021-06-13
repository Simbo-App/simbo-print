import { Component, Input } from "@angular/core";

@Component({
  selector: "uix-button",
  template: `
    <button
      [type]="type"
      class="button button-fill"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class UixButtonComponent {
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() disabled = false;
}
