import { Routes } from '@angular/router';
import {ListaComponent} from "./componente/lista/lista.component";
import {FormularioComponent} from './componente/formulario/formulario.component';
import {DetalheComponent} from './componente/detalhe/detalhe.component';

export const routes: Routes = [
  {path:'lista', component: ListaComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'detalhes', component: DetalheComponent},
  {path:'', redirectTo:'/lista', pathMatch:'full'}
];
