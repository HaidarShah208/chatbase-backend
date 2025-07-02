import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from "typeorm";

@Entity("sessions")
export class Sessions {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "bigint", nullable: true })
  jwt_token?: number;

  @Column({ type: "bigint", nullable: true })
  refresh_token?: number;

  @Column({ type: "timestamp", nullable: true })
  expires_at?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
