import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CleanedContents7567272727272 implements MigrationInterface {
  name = "CleanedContents7567272727272";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "CleanedContents",
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
            name: "cleaned_text",
            type: "text",
            isNullable: true,
          },
          {
            name: "cleaning_status",
            type: "enum",
            enum: ["pending", "in_progress", "completed", "failed"],
            isNullable: true,
          },

          {
            name: "cleaned_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("CleanedContents");
  }
}
