import { Grupo } from './grupo';  // Importando o Grupo

export interface Contato {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  grupos: Grupo[];  // Agora o contato possui um array de grupos
}
