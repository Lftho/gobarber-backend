import { uuid } from 'uuidv4';

class Agendamento {
  id: string;
  forcedor: string;
  data: Date;

  constructor(forncedor: string, data: Date) {
    this.id = uuid();
    this.forcedor = forncedor;
    this.data = data;
  }
}

export default Agendamento;