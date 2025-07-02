import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum AgentSettingsStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum AgentModel {
  GPT3_5 = "gpt-3.5",
  GPT4 = "gpt-4",
}

@Entity("agent_settings")
export class AgentSettings {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "enum", enum: AgentSettingsStatus, nullable: true })
  status?: AgentSettingsStatus;

  @Column({ type: "enum", enum: AgentModel, nullable: true })
  model?: AgentModel;

  @Column({ type: "float", nullable: true })
  temperature?: number;

  @Column({ type: "text", nullable: true })
  system_prompt?: string;

  @Column({ type: "text", nullable: true })
  instructions?: string;

  @Column({ type: "text", nullable: true })
  fallback_message?: string;
}
