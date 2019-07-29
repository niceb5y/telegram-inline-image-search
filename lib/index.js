"use strict";var _telegraf=_interopRequireDefault(require("telegraf")),_axios=_interopRequireDefault(require("axios")),_dotenv=require("dotenv");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/**
 * Load environment variables from .env file
 * TG_BOT_TOKEN: Get token from Botfather(https://telegram.me/BotFather)
 * KAKAO_REST_API_KEY: Get key from Kakao Developers (https://developers.kakao.com/)
 */const dotenv=(0,_dotenv.config)();if(dotenv.error)throw dotenv.error;/**
 * Create bot instance
 */const bot=new _telegraf.default(process.env.TG_BOT_TOKEN);/**
 * Query image with Kakao search API
 * https://developers.kakao.com/docs/restapi/search#이미지-검색
 * @param {string} query Words to query
 * @param {number} size Limit of query results
 */async function queryKakao(a="",b=80){const c=await _axios.default.get(`https://dapi.kakao.com/v2/search/image?query=${encodeURI(a)}&size=${b}`,{headers:{Authorization:`KakaoAK ${process.env.KAKAO_REST_API_KEY}`}});return c.data.documents}/**
 * Set inline query listener
 */ /**
 * Launch bot
 */bot.on("inline_query",async({inlineQuery:a,answerInlineQuery:b})=>{const c=""==a.query?"\uD154\uB808\uADF8\uB7A8 \uBA54\uC2E0\uC800":a.query,d=(await queryKakao(c,20)).map((a,b)=>({type:"photo",id:b+c,caption:`${c} - ${a.doc_url}`,description:`${c} - ${a.doc_url}`,thumb_url:a.thumbnail_url,photo_url:a.image_url}));return b(d)}),bot.launch();