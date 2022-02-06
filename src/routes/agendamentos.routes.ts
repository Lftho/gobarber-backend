import { Router } from 'express';
import { uuid } from 'uuidv4';

const agendamentosRouter = Router();

const agendamentos = [];

agendamentosRouter.post('/', (request, response) => {

  const { fornecedor, data } = request.body;

  const agendamento = {
    id: uuid(),
    fornecedor,
    data
  }

  agendamentos.push(agendamento);

  return response.json(agendamento);
});

export default agendamentosRouter;