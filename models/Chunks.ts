import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("chunks")
export class Chunks {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  source_id?: number;

  @Column({ type: "integer", nullable: true })
  chunk_index?: number;

  @Column({ type: "text", nullable: true })
  text?: string;

  @Column({ type: "integer", nullable: true })
  token_count?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;
}
