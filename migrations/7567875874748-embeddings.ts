import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Embeddings7567875874748 implements MigrationInterface {
  name = "Embeddings7567875874748";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Embeddings",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "chunk_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "vector",
            type: "text",
            isNullable: true,
          },
          {
            name: "model_used",
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
    await queryRunner.dropTable("Embeddings");
  }
}
