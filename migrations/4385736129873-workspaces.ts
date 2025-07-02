import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class WorkSpace4385736129873 implements MigrationInterface {
  name = "WorkSpace4385736129873";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "work_spaces",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: " text",
            isNullable: true,
          },
          {
            name: "owner_id",
            type: "bigint",
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
    await queryRunner.dropTable("work_spaces");
  }
}
