# Telegram inline image search

[![serverless](http://public.serverless.com/badges/v3.svg)](https://www.serverless.com) ![GitHub](https://img.shields.io/github/license/niceb5y/telegram-inline-image-search)

Telegram inline bot to search image via [Kakao search API](https://developers.kakao.com/docs/restapi/search#이미지-검색)

## Usage

1. Clone this repository.

2. Install dependencies (`npm install` or `yarn`).

3. Create `.env` file.

```env
TG_BOT_TOKEN=<Input your telegram bot token here>
KAKAO_REST_API_KEY=<Input your kakao rest api key here>
```

4. Run `npm run start` (or `yarn run start`) to run server.

## Usage (with Serverless)

1. Clone this repository.

2. [Install Serverless framework](https://serverless.com/framework/docs/providers/aws/guide/installation/) and [configure AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/).

3. Install dependencies (`npm install` or `yarn`).

4. Create `.env` file.

```env
TG_BOT_TOKEN=<Input your telegram bot token here>
KAKAO_REST_API_KEY=<Input your kakao rest api key here>
```

5. Run `npm run deploy` (or `yarn run deploy`) to deploy.

## Build project

- Run `npm run build` (or `yarn run build`).
- Watch mode (`npm run build:watch` or `yarn run build:watch`) also available.
