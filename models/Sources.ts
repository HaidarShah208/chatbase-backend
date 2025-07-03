import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

 

@Entity("sources")
export class Sources {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "varchar",  nullable: true })
  type?: string;

  @Column({ type: "text", nullable: true })
  title?: string;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "bigint", nullable: true })
  size?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
