import { startOfHour } from "date-fns";
import Agendamento from "../models/Agendamento";
import AgendamentosRepository from "../repositories/AgendamentosRepository";

interface RequestDTO {
  fornecedor: string;
  data: Date;
}

/**
 * dependency inversion (SOLID)
 */

class CriacaoAgendamentoService {
  private agendamentosRepository: AgendamentosRepository;

  constructor(agendamentosRepository: AgendamentosRepository) {
    this.agendamentosRepository = agendamentosRepository
  }


  public execute({
    fornecedor, data
  }: RequestDTO): Agendamento {
    const agendamentoData = startOfHour(data);

    const encontrarAgendamentoNaMesmaData =
      this.agendamentosRepository.encontrarUmaDataEspecifica(agendamentoData);

    if (encontrarAgendamentoNaMesmaData) {
      throw Error('Este agendamento já está reservado');
    }

    const agendamento = this.agendamentosRepository
      .criar({
        fornecedor,
        data: agendamentoData,
      });

    return agendamento;
  }

}

export default CriacaoAgendamentoService;