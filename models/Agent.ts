import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("agent")
export class Agent {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id!: number;

  @Column({ type: "text", nullable: true })
  name!: string;

  @Column({ type: "text", nullable: true })
  description!: string;

  @Column({ type: "varchar", nullable: true })
  tone!: string;

  @Column({ type: "text", nullable: true })
  system_prompt!: string;

  @Column({ type: "text", nullable: true })
  fallback_message!: string;

  @Column({ type: "bigint", nullable: true })
  new_column!: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt!: Date;
}
