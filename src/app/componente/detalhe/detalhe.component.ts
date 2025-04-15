import { Component } from '@angular/core';
import {Contato} from '../../models/contato';
import {ContatoService} from '../../service/contato.service';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent {
  listaContatos :Contato [] =[];

  idRemover :number = 0;

  constructor(private service :ContatoService) {
    this.service.listarContatos().subscribe(contatos => this.listaContatos = contatos);
  }

}
