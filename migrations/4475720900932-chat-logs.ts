import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ChatLogs4475720900932 implements MigrationInterface {
  name = "ChatLogs4475720900932";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "chat_logs",
        columns: [
          {
            name: "id",
            type: "bigint",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "agent_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "user_id",
            type: "bigint",
            isNullable: true,
          },
          {
            name: "user_message",
            type: "text",
            isNullable: true,
          },
          {
            name: "agent_response",
            type: "text",
            isNullable: true,
          },
          {
            name: "sources_used_json",
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
            type: "timestamp",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("chat_logs");
  }
}
