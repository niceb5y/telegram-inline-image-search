import { queryKakao } from "./query";

/**
 * inlineQuery handler
 */
export async function inlineQueryHandler({ inlineQuery, answerInlineQuery }) {
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
}
