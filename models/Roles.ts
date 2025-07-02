import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("roles")
export class Roles {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id!: number;

  @Column({ type: "text", nullable: true })
  name?: string;
}
