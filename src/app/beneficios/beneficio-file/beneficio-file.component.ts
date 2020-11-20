import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beneficio } from 'src/app/models/beneficio';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-beneficio-file',
  templateUrl: './beneficio-file.component.html',
  styleUrls: ['./beneficio-file.component.css']
})
export class BeneficioFileComponent implements OnInit {

  title: string = 'Arquivo';
  beneficio: Beneficio = new Beneficio();
  base64: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private beneficioService: BeneficioService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.beneficio = this.beneficioService.getById(parseInt(id));
    }
    this.base64 = this.beneficio.arquivoPDF;
  }

}
