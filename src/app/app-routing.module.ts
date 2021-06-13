import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  {
    path: "test",
    loadChildren: () => import('./printer/printer.module').then(m => m.PrinterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
