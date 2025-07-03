import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("messages")
export class Messages {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  conversation_id?: number;

  @Column({ type: "varchar",   nullable: true })
  sender?: string;

  @Column({ type: "text", nullable: true })
  message?: string;

  @Column({ type: "float", nullable: true })
  confidence_score?: number;

  @Column({ type: "boolean", nullable: true })
  created_at?: boolean;
}
