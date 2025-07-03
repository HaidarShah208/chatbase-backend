import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("playground_sessions")
export class PlaygroundSessions {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
