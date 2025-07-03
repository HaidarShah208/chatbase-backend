import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Messages4820458375910 implements MigrationInterface {
  name = "Messages4820458375910";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "conversation_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "sender",
            type: "string",

            isNullable: true,
          },
          {
            name: "message",
            type: "text",
            isNullable: true,
          },
          {
            name: "confidence_score",
            type: "float",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "boolean",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}
