"use strict";var _query=require("./query");Object.defineProperty(exports,"__esModule",{value:!0}),exports.inlineQueryHandler=inlineQueryHandler;async function inlineQueryHandler({inlineQuery:a,answerInlineQuery:b}){const c=""==a.query?"\uD154\uB808\uADF8\uB7A8 \uBA54\uC2E0\uC800":a.query,d=(await(0,_query.queryKakao)(c,20)).map((a,b)=>({type:"photo",id:b+c,caption:`${c} - ${a.doc_url}`,description:`${c} - ${a.doc_url}`,thumb_url:a.thumbnail_url,photo_url:a.image_url}));return b(d)}