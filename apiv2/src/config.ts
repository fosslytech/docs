import { URL } from 'url';

export const __dirname = new URL('.', import.meta.url).pathname;

export const CORS_OPTIONS = {
  origin: '*',
  method: ['GET', 'POST'],
  allowHeaders: ['Content-Type', 'x-api-key'],
  exposedHeaders: ['Content-Type'],
};

export const CRON_OPTIONS = {
  tempCleanup_dev: {
    name: '/temp cleanup',
    pattern: '* * * * *', // every 1 min
  },
  tempCleanup_prod: {
    name: '/temp cleanup',
    pattern: '*/30 * * * *', // every 30 mins
  },
};
