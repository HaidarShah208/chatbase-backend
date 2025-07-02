import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

export enum SourceType {
  FILE = "file",
  URL = "url",
  API = "api",
}

export enum DataSourceStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}

@Entity("data_sources")
export class DataSources {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "enum", enum: SourceType, nullable: true })
  source_type?: SourceType;

  @Column({ type: "varchar", nullable: true })
  name?: string;

  @Column({ type: "text", nullable: true })
  content?: string;

  @Column({ type: "varchar", nullable: true })
  file_path?: string;

  @Column({ type: "bigint", nullable: true })
  new_column?: number;

  @Column({ type: "text", nullable: true })
  url?: string;

  @Column({ type: "enum", enum: DataSourceStatus, nullable: true })
  status?: DataSourceStatus;

  @Column({ type: "int", nullable: true })
  size_kb?: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp", nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
