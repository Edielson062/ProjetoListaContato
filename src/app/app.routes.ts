import { Routes } from '@angular/router';
import {ListaComponent} from "./componente/lista/lista.component";
import {FormularioComponent} from './componente/formulario/formulario.component';
import {DetalheComponent} from './componente/detalhe/detalhe.component';
import {FormularioGrupoComponent} from './componente/formulario-grupo/formulario-grupo.component';
import {ListaGrupoComponent} from './componente/lista-grupo/lista-grupo.component';

export const routes: Routes = [
  {path:'lista', component: ListaComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'detalhes', component: DetalheComponent},
  { path: 'formulario-grupo', component: FormularioGrupoComponent },
  { path: 'lista-grupo', component: ListaGrupoComponent },
  {path:'', redirectTo:'/lista', pathMatch:'full'}
];

