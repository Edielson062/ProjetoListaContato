import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Agenda} from '../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url: string = "http://localhost:8080";
  constructor(private  http: HttpClient) { }

  listarAgenda(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.url + '/agenda');
  }

  listarAgendaPorId(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(this.url + '/agenda/' + id);
  }

  listarPorStatus(status:string):Observable<Agenda>{
    return this.http.get<Agenda>(this.url + '/agenda/status/' + status)
  }

  adicionarAgenda(agenda: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.url + '/agenda', agenda);
  }

  editarAgenda(agenda: Agenda): Observable<Agenda> {
    return this.http.put<Agenda>(this.url+ '/agenda', agenda);
  }

  deletarAgenda(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/agenda/' + id);
  }
}
