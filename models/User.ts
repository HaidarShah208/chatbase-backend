import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  get(arg0: { plain: boolean }): { [x: string]: any; password: any } {
    throw new Error("Method not implemented.");
  }
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

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "timestamp", nullable: true })
  blockUntil?: Date;

  @Column({ type: "int", nullable: true })
  code?: number;
}
