import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("chat_logs")
export class ChatLogs {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "text", nullable: true })
  user_message?: string;

  @Column({ type: "text", nullable: true })
  agent_response?: string;

  @Column({ type: "text", nullable: true })
  sources_used_json?: string;

  @Column({ type: "float", nullable: true })
  confidence_score?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
