import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password",
  database: "dev_database",
  synchronize: true,
  logging: false,
  entities: [User], // 确保实体被正确引用
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});