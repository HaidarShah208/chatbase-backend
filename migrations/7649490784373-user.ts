import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User7649490784373 implements MigrationInterface {
  name = "User7649490784373";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "role_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "name",
            type: "text",
            isNullable: true,
          },
          {
            name: "email",
            type: "text",
            isNullable: true,
          },
          {
            name: "password",
            type: "text",
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
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
