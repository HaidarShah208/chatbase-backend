import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

@Entity("cleaned_contents")
export class CleanedContents {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  source_id?: number;

  @Column({ type: "text", nullable: true })
  cleaned_text?: string;

  @Column({ type: "varchar",  nullable: true })
  cleaning_status?: string;

  @Column({ type: "timestamp", nullable: true })
  cleaned_at?: Date;
}
