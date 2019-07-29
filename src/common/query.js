import Axios from "axios";

/**
 * Query image with Kakao search API
 * https://developers.kakao.com/docs/restapi/search#이미지-검색
 * @param {string} query Words to query
 * @param {number} size Limit of query results
 */
export async function queryKakao(query = "", size = 80) {
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
