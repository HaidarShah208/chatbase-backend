import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TeamPlans6578900989898 implements MigrationInterface {
  name = "TeamPlans6578900989898";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "team_plans",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "team_id",
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
          { name: "started_at", type: "timestamp", isNullable: true },
          { name: "ended_at", type: "timestamp", isNullable: true },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("team_plans");
  }
}
