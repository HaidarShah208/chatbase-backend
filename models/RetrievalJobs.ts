import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum RetrievalJobStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  FAILED = "failed",
}

@Entity("retrieval_jobs")
export class RetrievalJobs {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  source_id?: number;

  @Column({ type: "enum", enum: RetrievalJobStatus, nullable: true })
  status?: RetrievalJobStatus;

  @Column({ type: "decimal", nullable: true })
  progress?: number;

  @Column({ type: "timestamp", nullable: true })
  started_at?: Date;

  @Column({ type: "timestamp", nullable: true })
  completed_at?: Date;
}
