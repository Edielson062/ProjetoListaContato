import {Contato} from './contato';

export interface Agenda {
  id:number;
  titulo:string;
  descricao:string;
  dataHora:string;
  local:string;
  contatos:Contato[];
}
