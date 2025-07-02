import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Conversation5783920485720 implements MigrationInterface {
    name = 'Conversation5783920485720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Conversation",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "agent_id",
                        type: "bigint",
                        isNullable: true,
                    },
                    {
                        name: "new_column",
                        type: "bigint",
                        isNullable: true,
                    },
                    {
                        name: "started_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "ended_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Conversation");
    }
}
