import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PlaygroundMessages4847567898756 implements MigrationInterface {
  name = "PlaygroundMessages4847567898756";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "playground_messages",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "session_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "sender",
            type: "string",

            isNullable: true,
          },
          {
            name: "message",
            type: " text",
            isNullable: true,
          },
          { name: "response", type: "text", isNullable: true },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("playground_messages");
  }
}
