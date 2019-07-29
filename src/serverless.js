/**
 * Serverless version
 */

import { bot } from "./common/bot";

/**
 * Serverless handler
 */
export async function handler(event, context, callback) {
	bot.handleUpdate(JSON.parse(event.body));
	return callback(null, {
		statusCode: 200,
		body: ""
	});
}
