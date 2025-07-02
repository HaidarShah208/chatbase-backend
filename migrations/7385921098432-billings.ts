import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Billings7385921098432 implements MigrationInterface {
  name = "Billings7385921098432";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "billings",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "email",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "country",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "address",
            type: "text",
            isNullable: true,
          },
          {
            name: "tax_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "current_method_id",
            type: "bigint",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("billings");
  }
}
