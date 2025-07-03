import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class WorkSpaceMembers5739204398472 implements MigrationInterface {
  name = "WorkSpaceMembers5739204398472";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "work_space_members",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "work_space_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "bigint",
            isNullable: true,
          },

          { name: "role", type: "text", isNullable: true },
          {
            name: "status",
            type: "string",

            isNullable: true,
          },
          { name: "last_active_at", type: "timestamp", isNullable: true },
          { name: "invited_at", type: "bigint", isNullable: true },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("work_space_members");
  }
}
