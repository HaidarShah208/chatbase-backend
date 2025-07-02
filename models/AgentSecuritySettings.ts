import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from "typeorm";

export enum AgentVisibility {
  PUBLIC = "public",
  PRIVATE = "private",
  RESTRICTED = "restricted",
}

@Entity("agent_Security_settings")
export class AgentSecuritySettings {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "enum", enum: AgentVisibility, nullable: true })
  visibility?: AgentVisibility;

  @Column({ type: "integer", nullable: true })
  rate_limit_per_user?: number;

  @Column({ type: "integer", nullable: true })
  rate_limit_per_session?: number;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
