import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Tweet } from "../tweet/tweet.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany((_type) => Tweet, (post: Tweet) => post.author)
  tweets: Tweet[];

  @Column()
  password: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
}
