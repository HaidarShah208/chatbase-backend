import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  role_id!: number;

  @Column({ type: "text", nullable: true })
  name!: string;

  @Column({ type: "text", unique: true, nullable: true })
  email!: string;

  @Column({ type: "text", nullable: true })
  password!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt!: Date;

}
