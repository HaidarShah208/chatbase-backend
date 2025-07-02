import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum TeamRole {
  ADMIN = "admin",
  MEMBER = "member",
  GUEST = "guest",
}

export enum TeamStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  REMOVED = "removed",
}

@Entity("team_members")
export class TeamMembers {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  team_id?: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "enum", enum: TeamRole, nullable: true })
  role?: TeamRole;

  @Column({ type: "enum", enum: TeamStatus, nullable: true })
  status?: TeamStatus;

  @Column({ type: "timestamp", nullable: true })
  last_active_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  invited_at?: Date;
}
