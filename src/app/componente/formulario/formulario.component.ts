// src/app/components/formulario/formulario.component.ts
import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { Grupo } from '../../models/grupo';
import { ContatoService } from '../../service/contato.service';
import { GrupoService } from '../../service/grupo.service';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NgForOf, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  novoContato: Contato = { id: 0, nome: '', telefone: '', email: '', grupos: [] };
  listaGrupos: Grupo[] = []; // Lista de grupos carregados do back-end

  constructor(
    private contatoService: ContatoService,
    private grupoService: GrupoService,
    private router: Router
  ) {
    // Carregar todos os grupos
    this.grupoService.listarGrupos().subscribe(grupos => this.listaGrupos = grupos);
  }

  salvar() {
    if (this.novoContato.id === 0) {
      this.contatoService.adicionarContato(this.novoContato)
        .subscribe(() => this.router.navigateByUrl('/lista'));
    } else {
      this.contatoService.editarContato(this.novoContato)
        .subscribe(() => this.router.navigateByUrl('/lista'));
    }
  }

  onGrupoChange(event: any, grupo: Grupo) {
    if (event.target.checked) {
      this.novoContato.grupos.push(grupo);  // Adiciona o grupo ao contato
    } else {
      this.novoContato.grupos = this.novoContato.grupos.filter(g => g.id !== grupo.id);  // Remove o grupo do contato
    }
  }

  isGrupoSelected(grupo: Grupo): boolean {
    return this.novoContato.grupos.some(g => g.id === grupo.id);  // Verifica se o grupo já está selecionado
  }
}
