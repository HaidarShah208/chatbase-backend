import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum PlanStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

@Entity("plans")
export class Plans {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "text", nullable: true })
  name?: string;

  @Column({ type: "double precision", nullable: true })
  price_monthly?: number;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "enum", enum: PlanStatus, nullable: true })
  status?: PlanStatus;

  @Column({ type: "int", nullable: true })
  credits?: number;

  @Column({ type: "int", nullable: true })
  agents?: number;

  @Column({ type: "int", nullable: true })
  messages?: number;

  @Column({ type: "bigint", nullable: true })
  new_column?: number;

  @Column({ type: "double precision", nullable: true })
  price_yearly?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
