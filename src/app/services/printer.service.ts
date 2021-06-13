import { Injectable } from '@angular/core';

const BluetoothPrinter = window["BluetoothPrinter"];

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private printer = BluetoothPrinter;

  list(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.list(resolve, reject);
    });
  }

  status(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.status(resolve, reject);
    });
  }

  connect(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.connect(name, resolve, reject);
    });
  }

  isConnected(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.isConnected(resolve, reject);
    });
  }

  disconnect(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.disconnect(resolve, reject);
    });
  }

  setEncoding(encoding: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.setEncoding(encoding, resolve, reject);
    });
  }

  printText(str: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printText(str, resolve, reject);
    });
  }

  printTitle(str: string, size: number, align: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printTitle(str, size, align, resolve, reject);
    });
  }

  printTextSizeAlign(str: string, size: number, align: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printTextSizeAlign(str, size, align, resolve, reject);
    });
  }

  printImageUrl(url: string, align = 0): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printImageUrl(url, align, resolve, reject);
    });
  }

  printBase64(data: string, align = 0): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printBase64(data, align, resolve, reject);
    });
  }

  printQRCode(data: string, align: number, model: number, size: number, eclevel: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printQRCode(data, align, model, size, eclevel, resolve, reject)
    });
  }

  printBarcode(data: string, system: number, align: number, position: number, font: number, height: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printBarcode(data, system, align, position, font, height, resolve, reject);
    });
  }

  printPOSCommand(str: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printer.printPOSCommand(str, resolve, reject);
    });
  }
}
