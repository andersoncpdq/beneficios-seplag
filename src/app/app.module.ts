import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficioFormComponent } from './beneficios/beneficio-form/beneficio-form.component';
import { BeneficioListComponent } from './beneficios/beneficio-list/beneficio-list.component';
import { BeneficioFileComponent } from './beneficios/beneficio-file/beneficio-file.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { TramiteFormComponent } from './tramitacao/tramite-form/tramite-form.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    BeneficioFormComponent,
    BeneficioListComponent,
    PdfViewerComponent,
    BeneficioFileComponent,
    TramiteFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    OverlayModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [MatDialogModule, { provide: LOCALE_ID, useValue: 'pt-BR' } ],
  bootstrap: [AppComponent],
  entryComponents: [PdfViewerComponent]
})
export class AppModule { }
