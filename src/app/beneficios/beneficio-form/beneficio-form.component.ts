import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Beneficio } from 'src/app/models/beneficio';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-beneficio-form',
  templateUrl: './beneficio-form.component.html',
  styleUrls: ['./beneficio-form.component.css']
})
export class BeneficioFormComponent implements OnInit {

  title: string = 'Novo Beneficiário';
  beneficio: Beneficio = new Beneficio();

  constructor(
    private router: Router,
    private beneficioService: BeneficioService
  ) { }

  ngOnInit(): void {
  }

  fileEventChange(fileInput: any) {
    let arquivo: File[] = fileInput.target.files;
    const file = arquivo[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileBase64 = reader.result?.toString().replace("data:application/pdf;base64,", "");
      this.beneficio.arquivoPDF = fileBase64;
    };
  }

  onSubmit() {
    this.beneficioService.save(this.beneficio);
    this.router.navigate(['']);
  }

}
