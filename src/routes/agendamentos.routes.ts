import { Router } from 'express';
import { parseISO } from 'date-fns';
import AgendamentosRepository from '../repositories/AgendamentosRepository';
import CriacaoAgendamentoService from '../services/CriacaoAgendamentoService';

import { getCustomRepository } from 'typeorm'

const agendamentosRouter = Router();

agendamentosRouter.get('/', async (request, response) => {
  const agendamentosRepository = getCustomRepository(AgendamentosRepository);
  const agendamentos = await agendamentosRepository.find();

  return response.json(agendamentos);
})

agendamentosRouter.post('/', async (request, response) => {
  try {
    const { fornecedor, data } = request.body;

    const novaData = parseISO(data); //Transformando uma data

    const criarAgendamento = new CriacaoAgendamentoService();

    const agendamento = await criarAgendamento.execute({
      data: novaData, fornecedor
    });

    return response.json(agendamento);
  } catch (err: any) {
    return response.status(400).json({
      error: err.message
    })
  }
});

export default agendamentosRouter;