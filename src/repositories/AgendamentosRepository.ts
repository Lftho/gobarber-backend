import { EntityRepository, Repository } from 'typeorm';

import Agendamento from "../models/Agendamento";
@EntityRepository(Agendamento)
class AgendamentosRepository extends Repository<Agendamento> {
  public async encontrarUmaDataEspecifica(data: Date): Promise<Agendamento | null> {
    const encontrarUmAgendamento = await
      this.findOne({ where: { data } })

    return encontrarUmAgendamento || null;
  }
}

export default AgendamentosRepository;