import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

ListaContato: Contato[] =[];

  constructor() { }
  adcionarContato(contato:Contato){
    if (contato.nome.length !=0 && (contato.telefone.length !=0 || contato.email.length !=0)){
      this.ListaContato.push(contato);
    }else{
      alert('Terá que inserir o nome e pelo menos o telefone ou email')
    }

  }
  removerContato(id: number){
    this.ListaContato = this.ListaContato.filter(contato => contato.id !== id);
  }
}
