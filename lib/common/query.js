"use strict";var _axios=_interopRequireDefault(require("axios"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.queryKakao=queryKakao;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}async function queryKakao(a="",b=80){const c=await _axios.default.get(`https://dapi.kakao.com/v2/search/image?query=${encodeURI(a)}&size=${b}`,{headers:{Authorization:`KakaoAK ${process.env.KAKAO_REST_API_KEY}`}});return c.data.documents}