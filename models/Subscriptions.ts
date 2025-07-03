import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("subscriptions")
export class Subscriptions {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "bigint", nullable: true })
  plan_id?: number;

  @Column({ type: "varchar",   nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  next_payment_due?: Date;

  @Column({ type: "timestamp", nullable: true })
  paused_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  canceled_at?: Date;
}
