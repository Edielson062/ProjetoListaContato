import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { GrupoService } from '../../service/grupo.service';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-grupo',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './lista-grupo.component.html',
  styleUrl: './lista-grupo.component.css'
})
export class ListaGrupoComponent {
  listaGrupos: Grupo[] = [];

  constructor(private grupoService: GrupoService) {
    this.grupoService.listarGrupos().subscribe(grupos => this.listaGrupos = grupos);
  }

  removerGrupo(id: number): void {
    this.grupoService.deletarGrupo(id).subscribe(() => {
      this.listaGrupos = this.listaGrupos.filter(grupo => grupo.id !== id);
    });
  }

}
