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
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'forncedor',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'data',
                        type: 'timestamp with time zone',
                        isNullable: false
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
