import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficioFormComponent } from './beneficios/beneficio-form/beneficio-form.component';
import { BeneficioListComponent } from './beneficios/beneficio-list/beneficio-list.component';
import { BeneficioFileComponent } from './beneficios/beneficio-file/beneficio-file.component';

const routes: Routes = [
  { path: '', component: BeneficioListComponent },
  { path: 'new', component: BeneficioFormComponent },
  { path: 'file/:id', component: BeneficioFileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
