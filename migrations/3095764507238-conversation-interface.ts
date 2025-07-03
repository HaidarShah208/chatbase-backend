import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ConversationInterface3095764507238 implements MigrationInterface {
  name = "ConversationInterface3095764507238";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "conversation_interface",
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
            name: "initial_message",
            type: "text",
            isNullable: true,
          },
          {
            name: "suggested_messages",
            type: "text",
            isArray: true,
            isNullable: true,
          },
          {
            name: "message_placeholder",
            type: "text",
            isNullable: true,
          },
          {
            name: "footer",
            type: "text",
            isNullable: true,
          },
          {
            name: "theme",
            type: "string",

            isNullable: true,
          },
          {
            name: "display_name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "chat_icon",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "user_message_color",
            type: "string",

            isNullable: true,
          },
          {
            name: "chat_button_color",
            type: "string",

            isNullable: true,
          },
          {
            name: "alignment",
            type: "string",

            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("conversation_interface");
  }
}
