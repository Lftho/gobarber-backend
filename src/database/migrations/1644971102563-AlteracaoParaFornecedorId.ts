import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey
} from "typeorm";

export class AlteracaoParaFornecedorId1644971102563 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn(
            'agendamentos',
            'fornecedor'
        );

        await queryRunner.addColumn(
            'agendamentos',
            new TableColumn({
                name: 'fornecedor_id',
                type: 'uuid',
                isNullable: true
            })
        );

        await queryRunner.createForeignKey(
            'agendamentos',
            new TableForeignKey({
                name: 'AgendamentoFornecedor',
                columnNames: [
                    'fornecedor_id'
                ],
                referencedColumnNames: ['id'],
                referencedTableName: 'usuarios',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'agendamentos',
            'AgendamentoFornecedor'
        );

        await queryRunner.dropColumn(
            'agendamentos',
            'fornecedor_id'
        );

        await queryRunner.addColumn(
            'agendamentos',
            new TableColumn({
                name: 'fornecedor',
                type: 'varchar',
            })
        )
    }

}
