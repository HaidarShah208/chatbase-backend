import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

export enum PlaygroundSender {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}

@Entity("playground_messages")
export class PlaygroundMessages {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  session_id?: number;

  @Column({ type: "enum", enum: PlaygroundSender, nullable: true })
  sender?: PlaygroundSender;

  @Column({ type: "text", nullable: true })
  message?: string;

  @Column({ type: "text", nullable: true })
  response?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
