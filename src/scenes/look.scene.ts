import {
  Scene,
  SceneEnter,
  SceneLeave,
  Command,
  Action,
} from "nestjs-telegraf";
import { HOME_SCENE_ID, LOOK_SCENE_ID } from "@/app.constants";
import { Context } from "@/interfaces/context.interface";

@Scene(LOOK_SCENE_ID)
export class LookScene {
  @SceneEnter()
  async onEnter(ctx: Context) {
    await ctx.reply("Try to home", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Home",
              callback_data: "home",
            },
          ],
        ],
      },
    });
  }

  @SceneLeave()
  onLeave() {
    return "Bye";
  }

  @Action("home")
  async onLook(ctx: Context) {
    await ctx.scene.enter(HOME_SCENE_ID);
  }
}
