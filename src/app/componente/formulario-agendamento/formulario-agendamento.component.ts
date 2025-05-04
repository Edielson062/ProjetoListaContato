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
import {MessageService} from 'primeng/api';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-formulario-agendamento',
  providers: [MessageService],
  imports: [
    Button,
    FloatLabel,
    InputText,
    Menubar,
    Panel,
    ReactiveFormsModule,
    FormsModule,
    Listbox,
    Toast
  ],
  templateUrl: './formulario-agendamento.component.html',
  standalone: true,
  styleUrl: './formulario-agendamento.component.css'
})
export class FormularioAgendamentoComponent {
  agendamentoInserir: Agenda = {titulo:'',descricao:'',dataHora:'',local:'',contatos:[],status:''}
  agendamentoEditar: Agenda = {id:0,titulo:'',descricao:'',dataHora:'',local:'',contatos:[],status:''}
  listaContato:Contato[] = [];
  listaStatus:string[] =['PENDENTE','REALIZADO','CANCELADO'];

  constructor(private service: AgendaService, private router:Router, private contatoService:ContatoService, private messageService: MessageService) {
    this.contatoService.listarContatos().subscribe(contatos => this.listaContato = contatos);
  }

  salvar() {
    this.service.adicionarAgenda(this.agendamentoInserir).subscribe({
      next: () => {
        this.router.navigateByUrl('/lista-agenda');
      },
      error: (erro) => {
        const msg = erro.error?.message || 'Erro ao salvar agendamento.';
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: msg
        });
      }
    });
  }
  editar(){
    this.service.editarAgenda(this.agendamentoEditar).subscribe({
      next: () => {
        this.router.navigateByUrl('/lista-agenda');
      },
      error: (erro) => {
        const msg = erro.error?.message || 'Erro ao salvar agendamento.';
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: msg
        });
      }
    });
  }

  carregarAgendamentoPorId(): void {
    if (this.agendamentoEditar.id) {
      this.service.listarAgendaPorId(this.agendamentoEditar.id).subscribe({
        next: (contato) => this.agendamentoEditar = contato,
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
