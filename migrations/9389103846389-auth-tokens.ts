import {
  MigrationInterface,
  QueryRunner,
  Table,
} from "typeorm";

export class AuthTokens9389103846389 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "auth_tokens",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "userId", type: "int" },
          { name: "token", type: "varchar", isUnique: true },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          { name: "expiresAt", type: "timestamp", isNullable: true },
          { name: "revoked", type: "boolean", default: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("auth_tokens");
  }
}
