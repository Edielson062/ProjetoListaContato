import { Grupo } from './grupo';

export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  grupos: Grupo[];
}
