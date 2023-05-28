import { Module } from "@nestjs/common";
import { TelegrafModule } from "nestjs-telegraf";
import { sessionMiddleware } from "./middleware/session.middleware";
import { BOT_NAME } from "./app.constants";
import { HomeScene } from "./scenes/home.scene";
import * as dotenv from "dotenv";
import { AppService } from "./app.service";
import { LookScene } from "./scenes/look.scene";
dotenv.config();

@Module({
  imports: [
    TelegrafModule.forRoot({
      botName: BOT_NAME,
      token: process.env.BOT_TOKEN,
      middlewares: [sessionMiddleware],
    }),
  ],

  providers: [AppService, HomeScene, LookScene],
})
export class AppModule { }
