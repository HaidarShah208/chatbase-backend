import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TrainingLogs7683929292924 implements MigrationInterface {
  name = "TrainingLogs7683929292924";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "training_logs",
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
            type: "enum",
            enum: ["pending", "in_progress", "completed", "failed"],
            isNullable: true,
          },
          {
            name: "log_text",
            type: "text",
            isNullable: true,
          },

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
    await queryRunner.dropTable("training_logs");
  }
}
