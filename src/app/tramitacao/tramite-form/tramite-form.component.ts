import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

import { TramiteService } from 'src/app/services/tramite.service';
import { Tramite } from './../../models/tramite';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tramite-form',
  templateUrl: './tramite-form.component.html',
  styleUrls: ['./tramite-form.component.css']
})
export class TramiteFormComponent implements OnInit {

  idBeneficio: number;
  origem: String;
  destino: String;
  tramites: Tramite[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private tramiteService: TramiteService
  ) { 
    this.idBeneficio = 0;
    this.origem = '';
    this.destino = '';
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.idBeneficio = parseInt(id);
    }
    this.refreshTable();
  }

  refreshTable() {
    this.tramites = this.tramiteService.getById(this.idBeneficio);
  }

  tramitar() {
    let tramite = new Tramite(uuidv4(), 
                              formatDate(new Date(), 'dd/MM/yyyy HH:MM:SS', 'pt_BR'),
                              this.origem,
                              this.destino,
                              "anderson.couto",
                              this.idBeneficio);

    this.tramiteService.save(tramite);
    this.refreshTable();
  }

}
