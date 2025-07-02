import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Invoices3498556490345 implements MigrationInterface {
  name = "Invoices3498556490345";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Invoices",
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
            name: "amount",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "status",
            type: "enum",
            enum: ["paid", "unpaid", "refunded"],
            isNullable: true,
          },
          {
            name: "invoice_url",
            type: "text",
            isNullable: true,
          },
          { name: "issued_at", type: "timestamp", isNullable: true },
          { name: "paid_at", type: "timestamp", isNullable: true },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Invoices");
  }
}
