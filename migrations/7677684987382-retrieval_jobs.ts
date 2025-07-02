import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class RetrivalJobs7677684987382 implements MigrationInterface {
  name = "RetrivalJobs7677684987382";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "RetrievalJobs",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "source_id",
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
            name: "progress",
            type: "decimal",
            isNullable: true,
          },

          { name: "started_at", type: "timestamp", isNullable: true },
          { name: "completed_at", type: "timestamp", isNullable: true },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("RetrievalJobs");
  }
}
