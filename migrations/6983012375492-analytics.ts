import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Analytics6983012375492 implements MigrationInterface {
  name = "Analytics6983012375492";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "analytics",
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
            name: "date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "total_chats",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "created_t",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("analytics");
  }
}
