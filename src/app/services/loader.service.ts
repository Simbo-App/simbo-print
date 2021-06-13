import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  private loader = false;
  private status: Subject<any>;
  message = "Chargement...";

  constructor() {
    this.status = new Subject();
  }

  get loading(): boolean {
    return this.loader;
  }

  set loading(value) {
    this.loader = value;
    this.status.next(value);
  }

  watch() {
    return this.status.asObservable();
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
    this.status.next(this.loader);
  }

  show(message?: string): void {
    this.message = message ? message : this.message;
    this.loading = true;
  }

  hide(): void {
    this.loading = false;
  }
}
