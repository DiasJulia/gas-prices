import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  states = [
    {
      id: 'AC',
      name: 'Acre',
      topojson: '/ac-state.json',
    },
    {
      id: 'AL',
      name: 'Alagoas',
      topojson: '/al-state.json',
    },
    {
      id: 'AM',
      name: 'Amazonas',
      topojson: '/am-state.json',
    },
    {
      id: 'AP',
      name: 'Amapá',
      topojson: '/ap-state.json',
    },
    {
      id: 'BA',
      name: 'Bahia',
      topojson: '/ba-state.json',
    },
    {
      id: 'CE',
      name: 'Ceará',
      topojson: '/ce-state.json',
    },
    {
      id: 'DF',
      name: 'Distrito Federal',
      topojson: '/df-state.json',
    },
    {
      id: 'ES',
      name: 'Espírito Santo',
      topojson: '/es-state.json',
    },
    {
      id: 'GO',
      name: 'Goiás',
      topojson: '/go-state.json',
    },
    {
      id: 'MA',
      name: 'Maranhão',
      topojson: '/ma-state.json',
    },
    {
      id: 'MG',
      name: 'Minas Gerais',
      topojson: '/mg-state.json',
    },
    {
      id: 'MS',
      name: 'Mato Grosso do Sul',
      topojson: '/ms-state.json',
    },
    {
      id: 'MT',
      name: 'Mato Grosso',
      topojson: '/mt-state.json',
    },
    {
      id: 'PA',
      name: 'Pará',
      topojson: '/pa-state.json',
    },
    {
      id: 'PB',
      name: 'Paraíba',
      topojson: '/pb-state.json',
    },
    {
      id: 'PE',
      name: 'Pernambuco',
      topojson: '/pe-state.json',
    },
    {
      id: 'PI',
      name: 'Piauí',
      topojson: '/pi-state.json',
    },
    {
      id: 'PR',
      name: 'Paraná',
      topojson: '/pr-state.json',
    },
    {
      id: 'RJ',
      name: 'Rio de Janeiro',
      topojson: '/rj-state.json',
    },
    {
      id: 'RN',
      name: 'Rio Grande do Norte',
      topojson: '/rn-state.json',
    },
    {
      id: 'RO',
      name: 'Rondônia',
      topojson: '/ro-state.json',
    },
    {
      id: 'RR',
      name: 'Roraima',
      topojson: '/rr-state.json',
    },
    {
      id: 'RS',
      name: 'Rio Grande do Sul',
      topojson: '/rs-state.json',
    },
    {
      id: 'SC',
      name: 'Santa Catarina',
      topojson: '/sc-state.json',
    },
    {
      id: 'SE',
      name: 'Sergipe',
      topojson: '/se-state.json',
    },
    {
      id: 'SP',
      name: 'São Paulo',
      topojson: '/sp-state.json',
    },
    {
      id: 'TO',
      name: 'Tocantins',
      topojson: '/to-state.json',
    },
  ];
  constructor() {}

  getStates() {
    return this.states;
  }
}
