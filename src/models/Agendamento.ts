import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('agendamentos')
class Agendamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fornecedor: string;

  @Column('timestamp with time zone')
  data: Date;
}

export default Agendamento;