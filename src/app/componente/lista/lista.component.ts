import { Component } from '@angular/core';
import { Contato } from '../../models/contato';
import { ContatoService } from '../../service/contato.service';
import { NgForOf, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

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
  listaContatos: Contato[] = [];

  constructor(private contatoService: ContatoService, private router: Router) {
    this.contatoService.listarContatos().subscribe(contatos => this.listaContatos = contatos);
  }

  // Método para deletar um contato
  removerContato(id: number): void {
    this.contatoService.deletarContato(id).subscribe(() => {
      this.listaContatos = this.listaContatos.filter(contato => contato.id !== id);
    });
  }
}
