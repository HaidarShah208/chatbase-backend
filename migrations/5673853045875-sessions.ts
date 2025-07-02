import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Sessions5673853045875 implements MigrationInterface {
  name = "Sessions5673853045875";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sessions",
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
            name: "jwt_token",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "refresh_token",
            type: "bigint",
            isNullable: true,
          },

          {
            name: "expires_at",
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
    await queryRunner.dropTable("sessions");
  }
}
