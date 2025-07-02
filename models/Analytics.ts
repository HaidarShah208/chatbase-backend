import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("analytics")
export class Analytics {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "timestamp", nullable: true })
  date?: Date;

  @Column({ type: "bigint", nullable: true })
  total_chats?: number;

  @Column({ type: "timestamp", nullable: true })
  created_t?: Date;
}
