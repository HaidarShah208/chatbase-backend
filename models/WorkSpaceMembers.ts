import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("work_space_members")
export class WorkSpaceMembers {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  work_space_id?: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "text", nullable: true })
  role?: string;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  last_active_at?: Date;

  @Column({ type: "bigint", nullable: true })
  invited_at?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
