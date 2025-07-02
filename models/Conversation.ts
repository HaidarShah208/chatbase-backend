import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("conversation")
export class Conversation {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "bigint", nullable: true })
  new_column?: number;

  @Column({ type: "timestamp", nullable: true })
  started_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  ended_at?: Date;
}
