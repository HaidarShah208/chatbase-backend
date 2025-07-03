import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("team_members")
export class TeamMembers {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  team_id?: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "varchar",  nullable: true })
  role?: string;

  @Column({ type: "varchar",  nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  last_active_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  invited_at?: Date;
}
