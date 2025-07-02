import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("otps")
export class OTP {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "text", nullable: false })
  email!: string;

  @Column({ type: "text", nullable: false })
  code!: string;

  @Column({ type: "boolean", default: false, nullable: false })
  isUsed!: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt!: Date;

  @Column({ name: "expires_at", type: "timestamp", nullable: false })
  expiresAt!: Date;
} 