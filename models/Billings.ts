import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("billings")
export class Billings {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "varchar", nullable: true })
  email?: string;

  @Column({ type: "varchar", nullable: true })
  name?: string;

  @Column({ type: "varchar", nullable: true })
  country?: string;

  @Column({ type: "text", nullable: true })
  address?: string;

  @Column({ type: "int", nullable: true })
  tax_id?: number;

  @Column({ type: "bigint", nullable: true })
  current_method_id?: number;
}
