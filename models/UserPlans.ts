import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserPlanStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  EXPIRED = "expired",
}

@Entity("user_plans")
export class UserPlans {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "bigint", nullable: true })
  plan_id?: number;

  @Column({ type: "enum", enum: UserPlanStatus, nullable: true })
  status?: UserPlanStatus;

  @Column({ type: "timestamp", nullable: true })
  start_date?: Date;

  @Column({ type: "timestamp", nullable: true })
  end_date?: Date;
}
