import Agendamento from "../models/Agendamento";
import { isEqual } from 'date-fns';


//DTO - Data Transfer Object 
interface CriarAgendamentoDTO {
  fornecedor: string;
  data: Date;
}
class AgendamentosRepository {
  private agendamentos: Agendamento[];

  constructor() {
    this.agendamentos = [];
  }

  public todos(): Agendamento[] {
    return this.agendamentos;
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

  public criar({ fornecedor, data }: CriarAgendamentoDTO): Agendamento {
    const agendamento = new Agendamento({ fornecedor, data });

    this.agendamentos.push(agendamento);

    return agendamento;
  }
}

export default AgendamentosRepository;