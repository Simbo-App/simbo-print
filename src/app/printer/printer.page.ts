import { Component, OnInit } from "@angular/core";

import { PrinterService } from "src/app/services/printer.service";

@Component({
  selector: "page-printer",
  templateUrl: "./printer.page.html",
  styleUrls: ["./printer.page.scss"]
})
export class PrinterPage implements OnInit {
  device;

  constructor(private printer: PrinterService) { }

  ngOnInit() { }

  getList(printer) {
    this.device = printer;
  }

  list() {
    this.printer.list().then(
      res => this.device = res,
      err => alert(JSON.stringify(err))
    );
  }

  status() {
    this.printer.status().then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }

  isConnected() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    this.printer.isConnected().then(
      res => res ? alert("Printer Connected") : alert("Printer disconnected"),
      err => alert(JSON.stringify(err))
    );
  }

  connect() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    this.printer.connect(this.device[1]).then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }

  disconnect() {
    if (!this.device) {
      alert("No printer available");
      return false;
    }

    this.printer.disconnect().then(
      res => alert(JSON.stringify(res)),
      err => alert(JSON.stringify(err))
    );
  }

  reset() {
    this.device = undefined;
  }
}
