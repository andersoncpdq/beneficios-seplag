import { Injectable } from '@angular/core';
import { Tramite } from '../models/tramite';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  tramites: Tramite[] = [];

  constructor() { }

  getById(id: number) {
    const list = window.localStorage.getItem('tramites');
    if(list) {
      this.tramites = JSON.parse(list);
    }

    let tramites: Tramite[] = [];
    tramites = this.tramites.filter((item: Tramite) => item.idBeneficio == id);
    return tramites;
  }

  save(tramite: Tramite) {
    this.tramites.push(tramite);
    window.localStorage.setItem('tramites', JSON.stringify(this.tramites));
  }
}
