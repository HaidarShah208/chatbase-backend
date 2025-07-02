import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Members5498230652308 implements MigrationInterface {
    name = 'Members5498230652308'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Members",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "team_id",
                        type: "bigint",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "bigint",
                        isNullable: true,
                    },
                    {
                        name: "member_since",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Members");
    }
}
