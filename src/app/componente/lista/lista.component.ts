import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../service/contato.service';
import {  NgIf } from '@angular/common';
import { Router} from '@angular/router';
import {GrupoService} from '../../service/grupo.service';
import {FormsModule} from '@angular/forms';
import { TableModule } from 'primeng/table';
import {Button} from 'primeng/button';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Panel} from 'primeng/panel';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    TableModule,
    Menubar,
    Panel,
    Button
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos: Contato[] = [];
  //contatos: Contato[] = [];
  //selectedGrupoId: number | undefined;

  constructor(private contatoService: ContatoService, private router: Router, private grupoService: GrupoService) {
    this.contatoService.listarContatos().subscribe(contatos => this.listaContatos = contatos);
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

  removerContato(id: number): void {
    this.contatoService.deletarContato(id).subscribe(() => {
      this.listaContatos = this.listaContatos.filter(contato => contato.id !== id);
    });
  }

  // filtrarPorGrupo() {
  //   if (this.selectedGrupoId) {
  //     this.contatoService.getContatosPorGrupo(this.selectedGrupoId).subscribe(contatos => {
  //       this.contatos = contatos;
  //     });
  //   }
  // }

}
