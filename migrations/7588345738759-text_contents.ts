import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TextContents7588345738759 implements MigrationInterface {
  name = "TextContents7588345738759";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "TextContents",
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
            name: "text",
            type: "text",
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
    await queryRunner.dropTable("TextContents");
  }
}
