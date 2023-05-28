import { Ctx, Start, Update } from 'nestjs-telegraf';
import { HOME_SCENE_ID } from '@/app.constants';
import { Context } from '@/interfaces/context.interface';

@Update()
export class AppService {
  @Start()
  async onStart(@Ctx() ctx: Context) {
    console.log('Enter');
    await ctx.scene.enter(HOME_SCENE_ID);
  }
}
