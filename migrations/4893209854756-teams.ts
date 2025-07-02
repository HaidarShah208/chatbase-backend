import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Teams4893209854756 implements MigrationInterface {
  name = "Teams4893209854756";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "teams",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "team_name",
            type: "text",
            isNullable: true,
          },
          {
            name: "team_url",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "bigint",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("teams");
  }
}
