import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("retrieval_jobs")
export class RetrievalJobs {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  source_id?: number;

  @Column({ type: "varchar", nullable: true })
  status?: string;

  @Column({ type: "decimal", nullable: true })
  progress?: number;

  @Column({ type: "timestamp", nullable: true })
  started_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  completed_at?: Date;
}
