import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const agendamentosRouter = Router();

interface Agendamento {
  id: string;
  fornecedor: string;
  data: Date;
}

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

  const agendamento = {
    id: uuid(),
    fornecedor,
    data: novaData,
  };

  agendamentos.push(agendamento);

  return response.json(agendamento);
});

export default agendamentosRouter;