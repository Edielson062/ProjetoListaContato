import { Component } from '@angular/core';
import {Grupo} from '../../models/grupo';
import {Agenda} from '../../models/agenda';
import {AgendaService} from '../../service/agenda.service';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {NgForOf, NgIf} from '@angular/common';
import {Panel} from 'primeng/panel';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-lista-agendamento',
  imports: [
    Menubar,
    NgIf,
    Panel,
    TableModule,
    NgForOf
  ],
  templateUrl: './lista-agendamento.component.html',
  standalone: true,
  styleUrl: './lista-agendamento.component.css'
})
export class ListaAgendamentoComponent {
  listaAgendamentos: Agenda[] = [];


  constructor(private service:AgendaService) {
    this.service.listarAgenda().subscribe(agendas => this.listaAgendamentos = agendas);
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
