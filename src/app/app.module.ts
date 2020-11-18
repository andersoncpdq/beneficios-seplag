import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeneficioFormComponent } from './beneficios/beneficio-form/beneficio-form.component';
import { BeneficioListComponent } from './beneficios/beneficio-list/beneficio-list.component';
import { BeneficioFileComponent } from './beneficios/beneficio-file/beneficio-file.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficioFormComponent,
    BeneficioListComponent,
    PdfViewerComponent,
    BeneficioFileComponent
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
  providers: [MatDialogModule],
  bootstrap: [AppComponent],
  entryComponents: [PdfViewerComponent]
})
export class AppModule { }
