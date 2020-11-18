import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Beneficio } from 'src/app/models/beneficio';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { PdfViewerComponent } from 'src/app/pdf-viewer/pdf-viewer.component';

@Component({
  selector: 'app-beneficio-file',
  templateUrl: './beneficio-file.component.html',
  styleUrls: ['./beneficio-file.component.css']
})
export class BeneficioFileComponent implements OnInit {

  title: string = 'Arquivo';
  beneficio: Beneficio = new Beneficio();

  constructor(
    private activatedRoute: ActivatedRoute,
    private beneficioService: BeneficioService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.beneficio = this.beneficioService.getById(parseInt(id));
    }
  }

  previewPDF(beneficio: Beneficio) {
    this.dialog.open(PdfViewerComponent, {
      width: "80%",
      data: {
        pdfData: beneficio.arquivoPDF
      }
    });
  }

}
