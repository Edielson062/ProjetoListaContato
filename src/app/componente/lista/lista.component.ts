import { Component } from '@angular/core';
import {Contato} from '../../models/contato';
import {ContatoService} from '../../service/contato.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaContatos :Contato [] =[];

  constructor(private service :ContatoService) {
    this.listaContatos = this.service.ListaContato;
  }
}
