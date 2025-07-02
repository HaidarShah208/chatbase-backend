import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AgentUiSettings6784987698347 implements MigrationInterface {
  name = "AgentUiSettings6784987698347";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "AgentUiSettings",
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
            name: "greeting_message",
            type: " text",
            isNullable: true,
          },
          {
            name: "placeholder_text",
            type: "text",
            isNullable: true,
          },
          {
            name: "cta_text",
            type: "text",
            isNullable: true,
          },
          {
            name: "theme",
            type: "enum",
            enum: ["light", "dark", "auto"],
            isNullable: true,
          },
          {
            name: "colors_json",
            type: "text",
            isNullable: true,
          },
          {
            name: "footer_message",
            type: "text",
            isNullable: true,
          },
          {
            name: "disclaimer",
            type: "text",
            isNullable: true,
          },
          {
            name: "icon_url",
            type: "text",
            isNullable: true,
          },
          {
            name: "button_shape",
            type: "enum",
            enum: ["rounded", "square", "pill"],
            isNullable: true,
          },
          {
            name: "layout_alignment",
            type: "enum",
            enum: ["left", "center", "right"],
            isNullable: true,
          },

          {
            name: "display_name",
            type: "text",
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
    await queryRunner.dropTable("AgentUiSettings");
  }
}
