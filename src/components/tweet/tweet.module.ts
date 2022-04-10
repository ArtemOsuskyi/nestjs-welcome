import { Module } from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { TweetController } from "./tweet.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tweet } from "./tweet.model";
import { UserModule } from "../user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([Tweet]), UserModule],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
