"use strict";var _bot=require("./common/bot");Object.defineProperty(exports,"__esModule",{value:!0}),exports.handler=handler;async function handler(a,b,c){return _bot.bot.handleUpdate(JSON.parse(a.body)),c(null,{statusCode:200,body:""})}