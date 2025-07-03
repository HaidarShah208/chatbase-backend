import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("agent_settings")
export class AgentSettings {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "varchar", nullable: true })
  model?: string;

  @Column({ type: "float", nullable: true })
  temperature?: number;

  @Column({ type: "text", nullable: true })
  system_prompt?: string;

  @Column({ type: "text", nullable: true })
  instructions?: string;

  @Column({ type: "text", nullable: true })
  fallback_message?: string;
}
