import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Agent9457690234561 implements MigrationInterface {
  name = "Agent9457690234561";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "agent",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "name",
            type: "text",
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "tone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "system_prompt",
            type: "text",
            isNullable: true,
          },
          {
            name: "fallback_message",
            type: "text",
            isNullable: true,
          },
          {
            name: "new_column",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "created_at",
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
    await queryRunner.dropTable("agent");
  }
}
