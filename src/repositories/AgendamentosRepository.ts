import Agendamento from "../models/Agendamento";
import { isEqual } from 'date-fns';

class AgendamentosRepository {
  private agendamentos: Agendamento[];

  constructor() {
    this.agendamentos = [];
  }

  public encontrarUmaDataEspecifica(data: Date): Agendamento | null {
    const encontrarUmAgendamento =
      this.agendamentos.find(
        agendamento => isEqual(
          data, agendamento.data
        )
      );

    return encontrarUmAgendamento || null;
  }

  public create(fornecedor: string, data: Date): Agendamento {
    const agendamento = new Agendamento(fornecedor, data);

    this.agendamentos.push(agendamento);

    return agendamento;
  }
}

export default AgendamentosRepository;