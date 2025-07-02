import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("payment_methods")
export class PaymentMethods {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "text", nullable: true })
  card_last4?: string;

  @Column({ type: "text", nullable: true })
  card_brand?: string;

  @Column({ type: "integer", nullable: true })
  expiry_month?: number;

  @Column({ type: "integer", nullable: true })
  expiry_year?: number;

  @Column({ type: "boolean", default: false, nullable: true })
  is_default?: boolean;
}
