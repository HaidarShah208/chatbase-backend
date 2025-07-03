import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("team_plans")
export class TeamPlans {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  team_id?: number;

  @Column({ type: "bigint", nullable: true })
  plan_id?: number;

  @Column({ type: "varchar",  nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  started_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  ended_at?: Date;
}
