import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { Grupo } from '../../models/grupo';
import { ContatoService } from '../../service/contato.service';
import { GrupoService } from '../../service/grupo.service';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {Panel} from 'primeng/panel';
import {Listbox} from 'primeng/listbox';
import {Button} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, Panel, FloatLabel, Listbox, Button, Menubar, InputText],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  contatoInserir: Contato = { id: 0, nome: '', telefone: '', email: '', grupos: [] };
  contatoEditar: Contato = { id: 0, nome: '', telefone: '', email: '', grupos: [] };
  listaGrupos: Grupo[] = [];

  constructor(
    private contatoService: ContatoService,
    private grupoService: GrupoService,
    private router: Router
  ) {

    this.grupoService.listarGrupos().subscribe(grupos => this.listaGrupos = grupos);
  }

  salvarInserir() {
    this.contatoService.adicionarContato(this.contatoInserir)
      .subscribe(() => this.router.navigateByUrl('/lista'));
  }

  salvarEditar() {
    this.contatoService.editarContato(this.contatoEditar)
      .subscribe(() => this.router.navigateByUrl('/lista'));
  }

  carregarContatoPorId(): void {
    if (this.contatoEditar.id) {
      this.contatoService.listarContatosPorId(this.contatoEditar.id).subscribe({
        next: (contato) => this.contatoEditar = contato,
        error: (err) => console.error('Contato não encontrado', err)
      });
    }
  }



  items: MenuItem[] = [
    {
      label:'Lista de Contatos',
      routerLink:'/lista'
    },
    {
      label: 'Lista de Contato Detalhada',
      routerLink: '/detalhes'
    },
    {
      label: 'Lista de Grupos',
      routerLink: '/lista-grupo'
    },
    {
      label: 'Lista de Agendamentos',
      routerLink:'/lista-agenda'
    },
    {
      label: 'Novo Contato',
      routerLink: '/formulario'
    },
    {
      label: 'Novo Grupo',
      routerLink: '/formulario-grupo'
    },
    {
      label:'Novo Agendamento',
      routerLink:'/formulario-agenda'
    }
  ];

}
