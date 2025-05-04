import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { GrupoService } from '../../service/grupo.service';
import { NgForOf, NgIf } from '@angular/common';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {TableModule} from 'primeng/table';
import {Panel} from 'primeng/panel';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-lista-grupo',
  standalone: true,
  imports: [
    NgIf,
    Menubar,
    TableModule,
    Panel,
    Button
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
