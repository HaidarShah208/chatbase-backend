import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

export enum BillingStatus {
  PAID = "paid",
  UNPAID = "unpaid",
  PENDING = "pending",
}

@Entity("billing_History")
export class BillingHistory {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  invoice_number?: number;

  @Column({ type: "double precision", nullable: true })
  amount?: number;

  @Column({ type: "enum", enum: BillingStatus, nullable: true })
  status?: BillingStatus;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
