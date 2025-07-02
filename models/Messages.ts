import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum MessageSender {
  USER = "user",
  BOT = "bot",
}

@Entity("messages")
export class Messages {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  conversation_id?: number;

  @Column({ type: "enum", enum: MessageSender, nullable: true })
  sender?: MessageSender;

  @Column({ type: "text", nullable: true })
  message?: string;

  @Column({ type: "float", nullable: true })
  confidence_score?: number;

  @Column({ type: "boolean", nullable: true })
  created_at?: boolean;
}
