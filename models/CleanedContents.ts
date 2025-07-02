import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum CleaningStatus {
  PENDING = "pending",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  FAILED = "failed",
}

@Entity("cleaned_contents")
export class CleanedContents {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  source_id?: number;

  @Column({ type: "text", nullable: true })
  cleaned_text?: string;

  @Column({ type: "enum", enum: CleaningStatus, nullable: true })
  cleaning_status?: CleaningStatus;

  @Column({ type: "timestamp", nullable: true })
  cleaned_at?: Date;
}
