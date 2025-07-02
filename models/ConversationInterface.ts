import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum ConversationTheme {
  LIGHT = "light",
  DARK = "dark",
}

export enum UserMessageColor {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
}

export enum ChatButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
}

export enum Alignment {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
}

@Entity("conversation_interface")
export class ConversationInterface {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "bigint", nullable: true })
  conversation_id?: number;

  @Column({ type: "text", nullable: true })
  initial_message?: string;

  @Column({ type: "text", array: true, nullable: true })
  suggested_messages?: string[];

  @Column({ type: "text", nullable: true })
  message_placeholder?: string;

  @Column({ type: "text", nullable: true })
  footer?: string;

  @Column({ type: "enum", enum: ConversationTheme, nullable: true })
  theme?: ConversationTheme;

  @Column({ type: "varchar", nullable: true })
  display_name?: string;

  @Column({ type: "varchar", nullable: true })
  chat_icon?: string;

  @Column({ type: "enum", enum: UserMessageColor, nullable: true })
  user_message_color?: UserMessageColor;

  @Column({ type: "enum", enum: ChatButtonColor, nullable: true })
  chat_button_color?: ChatButtonColor;

  @Column({ type: "enum", enum: Alignment, nullable: true })
  alignment?: Alignment;
}
