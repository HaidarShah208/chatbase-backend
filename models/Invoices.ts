import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("invoices")
export class Invoices {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "decimal", nullable: true })
  amount?: number;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "text", nullable: true })
  invoice_url?: string;

  @Column({ type: "timestamp", nullable: true })
  issued_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  paid_at?: Date;
}
