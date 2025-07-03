import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserPlans5803857297592 implements MigrationInterface {
  name = "UserPlans5803857297592";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user_plans",
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
            type: "string",

            isNullable: true,
          },
          {
            name: "start_date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "end_date",
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_plans");
  }
}
