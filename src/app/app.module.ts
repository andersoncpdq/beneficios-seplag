import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficioFormComponent } from './beneficios/beneficio-form/beneficio-form.component';
import { BeneficioListComponent } from './beneficios/beneficio-list/beneficio-list.component';
import { BeneficioFileComponent } from './beneficios/beneficio-file/beneficio-file.component';
import { TramiteFormComponent } from './tramitacao/tramite-form/tramite-form.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    BeneficioFormComponent,
    BeneficioListComponent,
    BeneficioFileComponent,
    TramiteFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    OverlayModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
