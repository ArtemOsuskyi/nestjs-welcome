import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./components/user/user.module";
import { TweetModule } from "./components/tweet/tweet.module";
import * as dbConfig from "./../ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig.dbOptions), UserModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
