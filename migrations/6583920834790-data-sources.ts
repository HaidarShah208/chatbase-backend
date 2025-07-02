import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DataSources6583920834790 implements MigrationInterface {
  name = "DataSources6583920834790";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "data_sources",
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
            name: "source_type",
            type: "enum",
            enum: ["file", "url", "api"],
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "content",
            type: "text",
            isNullable: true,
          },
          {
            name: "file_path",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "new_column",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "url",
            type: "text",
            isNullable: true,
          },
          {
            name: "status",
            type: "enum",
            enum: ["active", "inactive", "pending"],
            isNullable: true,
          },
          {
            name: "size_kb",
            type: "int",
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
    await queryRunner.dropTable("data_sources");
  }
}
