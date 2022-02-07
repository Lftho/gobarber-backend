import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AgendamentosRepository from '../repositories/AgendamentosRepository';

const agendamentosRouter = Router();
const agendamentosRepository = new AgendamentosRepository();

agendamentosRouter.post('/', (request, response) => {
  const { fornecedor, data } = request.body;

  const novaData = startOfHour(parseISO(data));

  const encontrarAgendamentoNaMesmaData =
    agendamentosRepository.encontrarUmaDataEspecifica(novaData);

  if (encontrarAgendamentoNaMesmaData) {
    return response
      .status(400)
      .json({
        message: 'Este agendamento já está reservado'
      });
  }

  const agendamento = agendamentosRepository
    .create(fornecedor, data);

  return response.json(agendamento);
});

export default agendamentosRouter;