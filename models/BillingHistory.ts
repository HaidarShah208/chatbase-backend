import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

 

@Entity("billing_History")
export class BillingHistory {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  invoice_number?: number;

  @Column({ type: "double precision", nullable: true })
  amount?: number;

  @Column({ type: "varchar",  nullable: true })
  status?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
