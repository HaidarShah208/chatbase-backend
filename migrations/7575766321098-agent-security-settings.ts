import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AgentSecuritySettings7575766321098 implements MigrationInterface {
  name = "AgentSecuritySettings7575766321098";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "agent_Security_settings",
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
            name: "visibility",
            type: "enum",
            enum: ["public", "private", "restricted"],
            isNullable: true,
          },
          { name: "rate_limit_per_user", type: "integer", isNullable: true },
          { name: "rate_limit_per_session", type: "integer", isNullable: true },

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
    await queryRunner.dropTable("agent_Security_settings");
  }
}
