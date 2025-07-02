import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PlaygroundSessions7683987649834 implements MigrationInterface {
  name = "PlaygroundSessions7683987649834";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "playground_sessions",
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
            name: "agent_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "status",
            type: "enum",
            enum: ["active", "inactive", "completed", "failed"],
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
    await queryRunner.dropTable("playground_sessions");
  }
}
