import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Plans6529475802341 implements MigrationInterface {
  name = "Plans6529475802341";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "plans",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "text",
            isNullable: true,
          },
          {
            name: "price_monthly",
            type: "double precision",
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "status",
            type: "string",

            isNullable: true,
          },
          {
            name: "credits",
            type: "int",
            isNullable: true,
          },
          {
            name: "agents",
            type: "int",
            isNullable: true,
          },
          {
            name: "messages",
            type: "int",
            isNullable: true,
          },
          {
            name: "new_column",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "price_yearly",
            type: "double precision",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("plans");
  }
}
