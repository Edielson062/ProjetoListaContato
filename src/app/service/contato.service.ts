import { Injectable } from '@angular/core';
import {Contato} from '../models/contato';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

ListaContato: Contato[] =[];
url :string = "localhost: 8080";

  constructor(private  http: HttpClient) { }

  listarContatos():Observable<Contato[]>{
    return this.http.get<Contato[]>(this.url + '/contato');
  }

  listarContatosPorId(id:number):Observable<Contato>{
  return this.http.get<Contato>(this.url + '/contato/' + id);
  }

  adicionarContato(contato: Contato):Observable<Contato>{
    return this.http.post<Contato>(this.url + '/contato', contato);
  }

  editarContato(contato:Contato):Observable<Contato>{
    return this.http.put<Contato>(this.url + '/contato', contato);
  }

  deletarContato(id:number){
    this.http.delete<Contato>(this.url + '/contato/' + id);
  }
}
