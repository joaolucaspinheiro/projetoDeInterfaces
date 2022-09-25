import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES

import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// SOLUÇÃO DO MÓDULO DECAPRECIADO (ModuleWithProviders)
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}