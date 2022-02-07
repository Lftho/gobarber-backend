import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Agendamento from '../models/Agendamento';

const agendamentosRouter = Router();

const agendamentos: Agendamento[] = [];

agendamentosRouter.post('/', (request, response) => {
  const { fornecedor, data } = request.body;

  const novaData = startOfHour(parseISO(data));
  const encontraraAgendamentoNaMesmaData =
    agendamentos.find(
      agendamento => isEqual(novaData, agendamento.data)
    )

  if (encontraraAgendamentoNaMesmaData) {
    return response
      .status(400)
      .json({
        message: 'Este agendamento já está reservado'
      });
  }

  const agendamento = new Agendamento(fornecedor, novaData);

  agendamentos.push(agendamento);

  return response.json(agendamento);
});

export default agendamentosRouter;