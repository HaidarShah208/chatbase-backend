import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PaymentMethods9034817456904 implements MigrationInterface {
  name = "PaymentMethods9034817456904";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "payment_methods",
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
            name: "card_last4",
            type: "text",
            isNullable: true,
          },
          {
            name: "card_brand",
            type: "text",
            isNullable: true,
          },
          { name: "expiry_month", type: "integer", isNullable: true },
          { name: "expiry_year", type: "integer", isNullable: true },
          {
            name: "is_default",
            type: "boolean",
            default: false,
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("payment_methods");
  }
}
