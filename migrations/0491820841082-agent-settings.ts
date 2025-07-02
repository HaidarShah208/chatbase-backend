import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AgentSetting0491820841082 implements MigrationInterface {
    name = 'AgentSetting0491820841082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "AgentSettings",
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
                        name: "status",
                        type: "enum",
                        enum: ["active", "inactive"], 
                        isNullable: true,
                    },
                    {
                        name: "model",
                        type: "enum",
                        enum: ["gpt-3.5", "gpt-4"], 
                        isNullable: true,
                    },
                    {
                        name: "temperature",
                        type: "float",
                        isNullable: true,
                    },
                    {
                        name: "system_prompt",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "instructions",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "fallback_message",
                        type: "text",
                        isNullable: true,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("AgentSettings");
    }
} 