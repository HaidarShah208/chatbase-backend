import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "chatbase",
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  logging: process.env.DB_LOGGING === "true",
  entities: ["models/*.ts"],
  subscribers: [],
  migrations: ["migrations/*.ts"],
  migrationsTableName: "migrations",
});
