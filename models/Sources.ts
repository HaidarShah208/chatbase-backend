import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum SourceType {
  FILE = "file",
  TEXT = "text",
  QNA = "q&a",
  WEBSITE = "website",
  NOTION = "notion",
}

export enum SourceStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

@Entity("sources")
export class Sources {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  user_id?: number;

  @Column({ type: "enum", enum: SourceType, nullable: true })
  type?: SourceType;

  @Column({ type: "text", nullable: true })
  title?: string;

  @Column({ type: "enum", enum: SourceStatus, nullable: true })
  status?: SourceStatus;

  @Column({ type: "bigint", nullable: true })
  size?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
