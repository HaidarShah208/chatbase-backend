import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

 

@Entity("training_logs")
export class TrainingLogs {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "varchar",   nullable: true })
  status?: string;

  @Column({ type: "text", nullable: true })
  log_text?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
