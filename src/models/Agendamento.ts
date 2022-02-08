import { uuid } from 'uuidv4';

class Agendamento {
  id: string;
  fornecedor: string;
  data: Date;

  constructor({ fornecedor, data }: Omit<Agendamento, 'id'>) {
    this.id = uuid();
    this.fornecedor = fornecedor;
    this.data = data;
  }
}

export default Agendamento;