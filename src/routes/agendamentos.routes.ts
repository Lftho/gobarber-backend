import { Router } from 'express';
import { parseISO } from 'date-fns';
import AgendamentosRepository from '../repositories/AgendamentosRepository';
import CriacaoAgendamentoService from '../services/CriacaoAgendamentoService';

const agendamentosRouter = Router();
const agendamentosRepository = new AgendamentosRepository();

agendamentosRouter.get('/', (request, response) => {
  const agendamentos = agendamentosRepository.todos();
  return response.json(agendamentos)
})

agendamentosRouter.post('/', (request, response) => {
  try {
    const { fornecedor, data } = request.body;

    const novaData = parseISO(data) //Transformando uma data

    const criarAgendamento = new CriacaoAgendamentoService(agendamentosRepository)

    const agendamento = criarAgendamento.execute({
      data: novaData, fornecedor
    })

    return response.json(agendamento);
  } catch (err: any) {
    return response.status(400).json({
      error: err.message
    })
  }
});

export default agendamentosRouter;