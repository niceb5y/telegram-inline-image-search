import Telegraf from "telegraf";
import Axios from "axios";
import { config } from "dotenv";

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
const bot = new Telegraf(process.env.TG_BOT_TOKEN);

/**
 * Query image with Kakao search API
 * https://developers.kakao.com/docs/restapi/search#이미지-검색
 * @param {string} query Words to query
 * @param {number} size Limit of query results
 */
async function queryKakao(query = "", size = 80) {
	const res = await Axios.get(
		`https://dapi.kakao.com/v2/search/image?query=${encodeURI(
			query
		)}&size=${size}`,
		{
			headers: {
				Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`
			}
		}
	);

	return res.data.documents;
}

/**
 * Set inline query listener
 */
bot.on("inline_query", async ({ inlineQuery, answerInlineQuery }) => {
	const query = inlineQuery.query != "" ? inlineQuery.query : "텔레그램 메신저";
	const results = (await queryKakao(query, 20)).map((doc, index) => ({
		type: "photo",
		id: index + query,
		caption: `${query} - ${doc.doc_url}`,
		description: `${query} - ${doc.doc_url}`,
		thumb_url: doc.thumbnail_url,
		photo_url: doc.image_url
	}));
	return answerInlineQuery(results);
});

/**
 * Launch bot
 */
bot.launch();
