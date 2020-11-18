import { Component, OnInit } from '@angular/core';

import { Beneficio } from 'src/app/models/beneficio';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-beneficio-list',
  templateUrl: './beneficio-list.component.html',
  styleUrls: ['./beneficio-list.component.css']
})
export class BeneficioListComponent implements OnInit {

  beneficios: Beneficio[] = [];

  constructor(private beneficioService: BeneficioService) { }

  ngOnInit(): void {
    this.beneficios = this.beneficioService.getAll();
  }

}
