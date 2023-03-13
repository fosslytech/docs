import { LocalHook, t } from 'elysia';
import path from 'path';

export const __dirname = new URL('.', import.meta.url).pathname;

export const STATIC_OPTIONS = {
  assets: path.join(__dirname, `/../temp`),
  prefix: '/temp',
};

export const CORS_OPTIONS =
  process.env.NODE_ENV === 'development'
    ? {
        origin: '*',
        method: ['GET', 'POST'],
        allowHeaders: ['Content-Type', 'x-api-key'],
        exposedHeaders: ['Content-Type'],
      }
    : {
        origin: ['https://staging-docs.fossly.tech', 'https://docs.fossly.tech'],
        method: ['GET', 'POST'],
        allowHeaders: ['Content-Type'],
        exposedHeaders: ['Content-Type'],
      };

export const CRON_TEMP_CLEANUP_OPTIONS =
  process.env.NODE_ENV === 'development'
    ? {
        name: '/temp cleanup',
        pattern: '* * * * *', // every 1 min
      }
    : {
        name: '/temp cleanup',
        pattern: '*/15 * * * *', // every 15 mins
      };

export const ROUTE_HOOK = {
  convert: {
    schema: {
      query: t.Object({
        from: t.RegEx(/^(odt|ods)$/),
        to: t.RegEx(/^(html)$/),
      }),
    },
  } as LocalHook,
  download: {
    schema: {
      query: t.Object({
        from: t.RegEx(/^(html)$/),
        to: t.RegEx(/^(odt|ods)$/),
      }),
      // body: t.Object({
      //   text: t.Any(),
      // }),
    },
  } as LocalHook,
};

export type IExtension = 'html' | 'odt' | 'ods';
