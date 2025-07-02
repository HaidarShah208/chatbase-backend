import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from "typeorm";

export enum AgentUiTheme {
  LIGHT = "light",
  DARK = "dark",
  AUTO = "auto",
}

export enum ButtonShape {
  ROUNDED = "rounded",
  SQUARE = "square",
  PILL = "pill",
}

export enum LayoutAlignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

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

  @Column({ type: "enum", enum: AgentUiTheme, nullable: true })
  theme?: AgentUiTheme;

  @Column({ type: "text", nullable: true })
  colors_json?: string;

  @Column({ type: "text", nullable: true })
  footer_message?: string;

  @Column({ type: "text", nullable: true })
  disclaimer?: string;

  @Column({ type: "text", nullable: true })
  icon_url?: string;

  @Column({ type: "enum", enum: ButtonShape, nullable: true })
  button_shape?: ButtonShape;

  @Column({ type: "enum", enum: LayoutAlignment, nullable: true })
  layout_alignment?: LayoutAlignment;

  @Column({ type: "text", nullable: true })
  display_name?: string;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp", nullable: true })
  updatedAt?: Date;
}
