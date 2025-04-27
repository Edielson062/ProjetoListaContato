import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  listarGrupos(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.url + '/grupos');
  }

  listarGrupoPorId(id: number): Observable<Grupo> {
    return this.http.get<Grupo>(this.url + '/grupos/' +id);
  }

  adicionarGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.url + '/grupos', grupo);
  }

  editarGrupo(grupo: Grupo): Observable<Grupo> {
    return this.http.put<Grupo>(this.url+ '/grupos', grupo);
  }

  deletarGrupo(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/grupos/' +id);
  }
}
