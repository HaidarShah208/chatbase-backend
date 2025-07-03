import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Sources4628747465998 implements MigrationInterface {
  name = "Sources4628747465998";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sources",
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
            name: "type",
            type: "string",

            isNullable: true,
          },
          {
            name: "title",
            type: "text",
            isNullable: true,
          },
          {
            name: "status",
            type: "string",

            isNullable: true,
          },
          {
            name: "size",
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
    await queryRunner.dropTable("sources");
  }
}
