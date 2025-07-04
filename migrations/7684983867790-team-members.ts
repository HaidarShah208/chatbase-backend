import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TeamMembers7684983867790 implements MigrationInterface {
  name = "TeamMembers7684983867790";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "team_members",
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
            name: "user_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "role",
            type: "string",

            isNullable: true,
          },
          {
            name: "status",
            type: "string",

            isNullable: true,
          },
          { name: "last_active_at", type: "timestamp", isNullable: true },
          { name: "invited_at", type: "timestamp", isNullable: true },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("team_members");
  }
}
