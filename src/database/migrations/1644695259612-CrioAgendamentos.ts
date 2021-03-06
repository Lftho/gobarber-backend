import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CrioAgendamentos1644695259612 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //executando algo novo
        await queryRunner.createTable(
            new Table({
                name: 'agendamentos',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'fornecedor',
                        type: 'varchar',
                    },
                    {
                        name: 'data',
                        type: 'timestamp with time zone',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //removendo  esse algo novo 
        await queryRunner.dropTable('agendamentos')
    }

}
