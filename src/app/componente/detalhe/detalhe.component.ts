import { Component } from '@angular/core';
import {Contato} from '../../models/contato';
import {ContatoService} from '../../service/contato.service';
import {NgForOf, NgIf} from '@angular/common';
import {TableModule} from 'primeng/table';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Panel} from 'primeng/panel';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [
    NgIf,
    TableModule,
    NgForOf,
    Menubar,
    Panel
  ],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  listaContatos :Contato [] =[];

  constructor(private service :ContatoService) {
    this.service.listarContatos().subscribe(contatos => this.listaContatos = contatos);
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
