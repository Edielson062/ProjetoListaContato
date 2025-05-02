import { Component } from '@angular/core';
import {Agenda} from '../../models/agenda';
import {AgendaService} from '../../service/agenda.service';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Menubar} from 'primeng/menubar';
import {Panel} from 'primeng/panel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Listbox} from 'primeng/listbox';
import {ContatoService} from '../../service/contato.service';
import {Contato} from '../../models/contato';

@Component({
  selector: 'app-formulario-agendamento',
  imports: [
    Button,
    FloatLabel,
    InputText,
    Menubar,
    Panel,
    ReactiveFormsModule,
    FormsModule,
    Listbox
  ],
  templateUrl: './formulario-agendamento.component.html',
  standalone: true,
  styleUrl: './formulario-agendamento.component.css'
})
export class FormularioAgendamentoComponent {
  novoAgendamento: Agenda = {id:0,titulo:'',descricao:'',dataHora:'',local:'',contatos:[]}
  listaContato:Contato[] = [];

  constructor(private service: AgendaService, private router:Router, private contatoService:ContatoService) {
    this.contatoService.listarContatos().subscribe(contatos => this.listaContato = contatos);
  }

  salvar(){
    this.service.adicionarAgenda(this.novoAgendamento)
      .subscribe(() => this.router.navigateByUrl('/lista-grupo'));
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
