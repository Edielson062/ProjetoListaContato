import { Component } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { GrupoService } from '../../service/grupo.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-grupo',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
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
}
