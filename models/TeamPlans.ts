import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum TeamPlanStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  EXPIRED = "expired",
}

@Entity("team_plans")
export class TeamPlans {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  team_id?: number;

  @Column({ type: "bigint", nullable: true })
  plan_id?: number;

  @Column({ type: "enum", enum: TeamPlanStatus, nullable: true })
  status?: TeamPlanStatus;

  @Column({ type: "timestamp", nullable: true })
  started_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  ended_at?: Date;
}
