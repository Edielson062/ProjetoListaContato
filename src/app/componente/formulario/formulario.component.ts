import { Component } from '@angular/core';
import {Contato} from '../../models/contato';
import {ContatoService} from '../../service/contato.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
id :number = 0;
idRemover :number = 0;
nome :string = '';
telefone :string = '';
email :string = '';


  constructor(private contatoService :ContatoService, private router :Router) {
  }

  adcionarContato(){
    this.contatoService.adcionarContato({id:this.id,nome:this.nome,telefone:this.telefone,email:this.email});
    this.router.navigateByUrl('/lista');
  }

  removerContato(){
    this.contatoService.removerContato(this.idRemover);
    this.router.navigateByUrl('/lista');
  }
}
