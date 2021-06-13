import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { UixModule } from "src/@uix/angular/core";

import { LoaderComponent } from "./loader/loader.component";
import { UixFormFieldComponent } from "./uix/form-field.component";
import { UixButtonComponent } from "./uix/button.component";

const COMPONENTS_LIST = [
  LoaderComponent,
  UixFormFieldComponent,
  UixButtonComponent
];

const MODULES_LIST = [
  CommonModule,
  FormsModule,
  UixModule
];

@NgModule({
  declarations: [...COMPONENTS_LIST],
  exports: [...MODULES_LIST, ...COMPONENTS_LIST],
  imports: [...MODULES_LIST, RouterModule]
})
export class CoreModule { };
