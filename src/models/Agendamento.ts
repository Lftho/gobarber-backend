import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Usuario from './Usuario';
@Entity('agendamentos')
class Agendamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fornecedor_id: string;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'fornecedor_id' })
  fornecedor: Usuario;

  @Column('timestamp with time zone')
  data: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Agendamento;