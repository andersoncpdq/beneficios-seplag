import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  base64: any;

  constructor(@Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit(): void {
    this.base64 = this.data.pdfData;
  }

}
