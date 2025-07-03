import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("playground_messages")
export class PlaygroundMessages {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  session_id?: number;

  @Column({ type: "varchar", nullable: true })
  sender?: string;

  @Column({ type: "text", nullable: true })
  message?: string;

  @Column({ type: "text", nullable: true })
  response?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
