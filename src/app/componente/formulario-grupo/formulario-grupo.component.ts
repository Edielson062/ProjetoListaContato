import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { GrupoService } from '../../service/grupo.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {Panel} from 'primeng/panel';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-formulario-grupo',
  standalone: true,
  imports: [
    FormsModule,
    Menubar,
    Button,
    FloatLabel,
    Panel,
    InputText
  ],
  templateUrl: './formulario-grupo.component.html',
  styleUrl: './formulario-grupo.component.css'
})
export class FormularioGrupoComponent {
  novoGrupo: Grupo = { id: 0, nome: '' };

  constructor(private grupoService: GrupoService, private router: Router) {}

  salvar() {
    if (this.novoGrupo.id === 0) {
      this.grupoService.adicionarGrupo(this.novoGrupo)
        .subscribe(() => this.router.navigateByUrl('/lista-grupo'));
    } else {
      this.grupoService.editarGrupo(this.novoGrupo)
        .subscribe(() => this.router.navigateByUrl('/lista-grupo'));
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
