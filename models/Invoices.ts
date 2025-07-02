import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum InvoiceStatus {
  PAID = "paid",
  UNPAID = "unpaid",
  REFUNDED = "refunded",
}

@Entity("invoices")
export class Invoices {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "decimal", nullable: true })
  amount?: number;

  @Column({ type: "enum", enum: InvoiceStatus, nullable: true })
  status?: InvoiceStatus;

  @Column({ type: "text", nullable: true })
  invoice_url?: string;

  @Column({ type: "timestamp", nullable: true })
  issued_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  paid_at?: Date;
}
