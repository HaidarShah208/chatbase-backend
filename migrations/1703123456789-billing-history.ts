import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class BillingHistory1703123456789 implements MigrationInterface {
  name = "BillingHistory1703123456789";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "billing_History",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "invoice_number",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "amount",
            type: "double precision",
            isNullable: true,
          },
          {
            name: "status",
            type: "enum",
            enum: ["paid", "unpaid", "pending"],
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("billing_History");
  }
}
