// src/app/components/formulario/formulario.component.ts
import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { Grupo } from '../../models/grupo';
import { ContatoService } from '../../service/contato.service';
import { GrupoService } from '../../service/grupo.service';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgForOf} from '@angular/common';
import {FloatLabel} from 'primeng/floatlabel';
import {Panel} from 'primeng/panel';
import {IftaLabel} from 'primeng/iftalabel';
import {Listbox} from 'primeng/listbox';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, RouterLink, Panel, FloatLabel, Listbox, Button],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  novoContato: Contato = { id: 0, nome: '', telefone: '', email: '', grupos: [] };
  listaGrupos: Grupo[] = [];

  constructor(
    private contatoService: ContatoService,
    private grupoService: GrupoService,
    private router: Router
  ) {

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


}
