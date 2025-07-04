import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AgentSetting0491820841082 implements MigrationInterface {
  name = "AgentSetting0491820841082";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "agent_settings",
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
            name: "status",
            type: "string",
            isNullable: true,
          },
          {
            name: "model",
            type: "string",
            isNullable: true,
          },
          {
            name: "temperature",
            type: "float",
            isNullable: true,
          },
          {
            name: "system_prompt",
            type: "text",
            isNullable: true,
          },
          {
            name: "instructions",
            type: "text",
            isNullable: true,
          },
          {
            name: "fallback_message",
            type: "text",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("agent_settings");
  }
}
