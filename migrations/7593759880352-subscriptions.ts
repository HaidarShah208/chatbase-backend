import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Subscriptions7593759880352 implements MigrationInterface {
  name = "Subscriptions7593759880352";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "subscriptions",
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
            name: "plan_id",
            type: "bigint",
            isNullable: true,
          },

          {
            name: "status",
            type: "enum",
            enum: ["active", "inactive", "cancelled"],
            isNullable: true,
          },
          { name: "next_payment_due", type: "timestamp", isNullable: true },
          { name: "paused_at", type: "timestamp", isNullable: true },
          { name: "canceled_at", type: "timestamp", isNullable: true },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("subscriptions");
  }
}
