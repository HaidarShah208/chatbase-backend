import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from "typeorm";

 

@Entity("agent_ui_settings")
export class AgentUiSettings {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  agent_id?: number;

  @Column({ type: "text", nullable: true })
  greeting_message?: string;

  @Column({ type: "text", nullable: true })
  placeholder_text?: string;

  @Column({ type: "text", nullable: true })
  cta_text?: string;

  @Column({ type: "varchar",  nullable: true })
  theme?: string;

  @Column({ type: "text", nullable: true })
  colors_json?: string;

  @Column({ type: "text", nullable: true })
  footer_message?: string;

  @Column({ type: "text", nullable: true })
  disclaimer?: string;

  @Column({ type: "text", nullable: true })
  icon_url?: string;

  @Column({ type: "varchar",  nullable: true })
  button_shape?: string;

  @Column({ type: "varchar",  nullable: true })
  layout_alignment?: string;

  @Column({ type: "text", nullable: true })
  display_name?: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
