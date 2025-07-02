import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Chunks7563746746578 implements MigrationInterface {
  name = "Chunks7563746746578";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Chunks",
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
            name: "chunk_index",
            type: "integer",
            isNullable: true,
          },
          {
            name: "text",
            type: "text",
            isNullable: true,
          },
          { name: "token_count", type: "integer", isNullable: true },
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
    await queryRunner.dropTable("Chunks");
  }
}
