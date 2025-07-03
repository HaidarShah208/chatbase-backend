import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 

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

  @Column({ type: "varchar",  nullable: true })
  theme?: string;

  @Column({ type: "varchar", nullable: true })
  display_name?: string;

  @Column({ type: "varchar", nullable: true })
  chat_icon?: string;

  @Column({ type: "varchar",  nullable: true })
  user_message_color?: string;

  @Column({ type: "varchar",  nullable: true })
  chat_button_color?: string;

  @Column({ type: "varchar", nullable: true })
  alignment?: string;
}
