import {
  Scene,
  SceneEnter,
  SceneLeave,
  Command,
  Action,
} from "nestjs-telegraf";
import { HOME_SCENE_ID, LOOK_SCENE_ID } from "@/app.constants";
import { Context } from "@/interfaces/context.interface";

@Scene(HOME_SCENE_ID)
export class HomeScene {
  @SceneEnter()
  async onEnter(ctx: Context) {
    await ctx.reply("Try to look", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Look",
              callback_data: "look",
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

  @Action("look")
  async onLook(ctx: Context) {
    await ctx.scene.enter(LOOK_SCENE_ID);
  }

  @Command("leave")
  async onLeaveCommand(ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
