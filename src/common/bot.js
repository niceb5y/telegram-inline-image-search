import Telegraf from "telegraf";
import { config } from "dotenv";

import { inlineQueryHandler } from "./handler";

/**
 * Load environment variables from .env file
 * TG_BOT_TOKEN: Get token from Botfather(https://telegram.me/BotFather)
 * KAKAO_REST_API_KEY: Get key from Kakao Developers (https://developers.kakao.com/)
 */
const dotenv = config();
if (dotenv.error) throw dotenv.error;

/**
 * Create bot instance
 */
export const bot = new Telegraf(process.env.TG_BOT_TOKEN);

/**
 * Set inline query listener
 */
bot.on("inline_query", inlineQueryHandler);
