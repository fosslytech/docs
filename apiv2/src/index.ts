import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { cors } from '@elysiajs/cors';
import '@elysiajs/cron';

import { middleware_Error } from './middleware';
import { CORS_OPTIONS, CRON_OPTIONS } from './config';
import { cron_tempCleanup } from './cron/tempCleanup';

import * as router from './api/router';

const app = new Elysia()

  // Plugins
  // .use(staticPlugin())
  .use(cors(CORS_OPTIONS))

  // Cron jobs
  .cron(CRON_OPTIONS.tempCleanup_dev, cron_tempCleanup)

  // Middlewares
  // .on('request', middlewareApiKey) // Check API key
  .on('error', middleware_Error) // Handle errors

  // Routes
  .get('/', () => 'Hello, Elysia')

  .post('/convert', router.handleConvert) // Convert file ( .od* -> raw html )

  .post('/pre-download', () => 'Hello, Elysia') // Prepare a file for download
  .post('/download', () => 'Hello, Elysia') // Actual download

  // Listen
  .listen(4001);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
