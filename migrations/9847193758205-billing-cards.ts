import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class BillingCards9847193758205 implements MigrationInterface {
  name = "BillingCards9847193758205";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "billing_cards",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "Brand",
            type: "string",

            isNullable: true,
          },
          {
            name: "last_4",
            type: "int",
            isNullable: true,
          },
          {
            name: "exp_date",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("billing_cards");
  }
}
