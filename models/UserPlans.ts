import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("user_plans")
export class UserPlans {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "bigint", nullable: true })
  plan_id?: number;

  @Column({ type: "varchar",   nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  start_date?: Date;

  @Column({ type: "timestamp", nullable: true })
  end_date?: Date;
}
