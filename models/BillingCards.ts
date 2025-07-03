import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("billing_cards")
export class BillingCards {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "varchar", nullable: true })
  Brand?: string;

  @Column({ type: "int", nullable: true })
  last_4?: number;

  @Column({ type: "timestamp", nullable: true })
  exp_date?: Date;
}
