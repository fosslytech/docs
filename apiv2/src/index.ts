import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { staticPlugin } from '@elysiajs/static';
import '@elysiajs/cron';

import { middleware_Error } from './middleware';
import { CORS_OPTIONS, CRON_TEMP_CLEANUP_OPTIONS, ROUTE_HOOK, STATIC_OPTIONS } from './config';
import { cron_tempCleanup } from './cron/tempCleanup';

import * as router from './api/router';

const app = new Elysia()

  // Plugins
  .use(cors(CORS_OPTIONS))
  .use(staticPlugin(STATIC_OPTIONS))

  // Cron jobs
  .cron(CRON_TEMP_CLEANUP_OPTIONS, cron_tempCleanup)

  // Middlewares
  // .on('request', middlewareApiKey) // Check API key
  .on('error', middleware_Error) // Handle errors

  // Routes
  .get('/', () => 'Hello, Elysia')

  .post('/convert', router.handleConvert, ROUTE_HOOK.convert as any) // Convert file ( .od* -> raw html )
  .post('/download', router.handleDownload, ROUTE_HOOK.download as any) // Download file ( raw html -> .od* )

  // Listen
  .listen(4001);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
