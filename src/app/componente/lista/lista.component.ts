import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../service/contato.service';
import { NgForOf, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {Grupo} from '../../models/grupo';
import {GrupoService} from '../../service/grupo.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];
  grupos: Grupo[] = [];
  contatos: Contato[] = [];
  selectedGrupoId: number = 0;

  constructor(private contatoService: ContatoService, private router: Router, private grupoService: GrupoService) {
    this.contatoService.listarContatos().subscribe(contatos => this.listaContatos = contatos);
  }

  // Método para deletar um contato
  removerContato(id: number): void {
    this.contatoService.deletarContato(id).subscribe(() => {
      this.listaContatos = this.listaContatos.filter(contato => contato.id !== id);
    });
  }

  ngOnInit(): void {
    this.grupoService.listarGrupos().subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  // Método para filtrar contatos por grupo
  filtrarPorGrupo() {
    if (this.selectedGrupoId) {
      this.contatoService.getContatosPorGrupo(this.selectedGrupoId).subscribe(contatos => {
        this.contatos = contatos;
      });
    }
  }
}
