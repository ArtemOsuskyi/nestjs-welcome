import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from "./src/components/user/user.model";
import { Tweet } from "./src/components/tweet/tweet.model";

require("dotenv").config();

export const dbOptions: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  migrationsRun: true,
  dropSchema: false,
  entities: [User, Tweet],
  migrations: [],
};
