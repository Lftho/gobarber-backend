import { startOfHour } from "date-fns";
import Agendamento from "../models/Agendamento";
import AgendamentosRepository from "../repositories/AgendamentosRepository";


import { getCustomRepository } from 'typeorm'

interface RequestDTO {
  fornecedor: string;
  data: Date;
}

/**
 * dependency inversion (SOLID)
 */

class CriacaoAgendamentoService {
  public async execute({ fornecedor, data }: RequestDTO): Promise<Agendamento> {
    const agendamentosRepository = getCustomRepository(AgendamentosRepository);

    const agendamentoData = startOfHour(data);

    const encontrarAgendamentoNaMesmaData =
      await agendamentosRepository
        .encontrarUmaDataEspecifica(agendamentoData);

    if (encontrarAgendamentoNaMesmaData) {
      throw Error('Este agendamento já está reservado');
    }

    const agendamento = agendamentosRepository
      .create({
        fornecedor,
        data: agendamentoData,
      });

    await agendamentosRepository.save(agendamento)

    return agendamento;
  }

}

export default CriacaoAgendamentoService;