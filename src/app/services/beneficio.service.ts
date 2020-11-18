import { Injectable } from '@angular/core';
import { Beneficio } from '../models/beneficio';

@Injectable({
  providedIn: 'root'
})
export class BeneficioService {

  beneficios: Beneficio[] = [];

  constructor() { }

  getAll() {
    const list = window.localStorage.getItem('beneficios');
    if(list) {
      this.beneficios = JSON.parse(list);
    }
    return this.beneficios;
  }

  getById(id: number) {
    let beneficio: any;
    beneficio = this.beneficios.find((value) => value.id == id);
    return beneficio;
  }

  save(beneficio: Beneficio) {
    const lastId = (this.beneficios.length == 0) ? 0 : this.beneficios[this.beneficios.length-1].id;
    beneficio.id = lastId + 1;
    switch (beneficio.tipo) {
      case '1':
        beneficio.tipo = 'Identificação';
        break;
      case '2':
        beneficio.tipo = 'Vida Funcional';
        break;
      case '3':
        beneficio.tipo = 'Contagem de Tempo';
        break;
      case '4':
        beneficio.tipo = 'Remuneração/Proventos';
        break;
      default:
        break;
    }
    this.beneficios.push(beneficio);

    window.localStorage.setItem('beneficios', JSON.stringify(this.beneficios));
  }
}
