'use strict';

import Hapi, { Server } from '@hapi/hapi';
import router from './api/router';
import dotenv from 'dotenv';

dotenv.config();

const init = async () => {
  const server: Server = Hapi.server({
    port: process.env.PORT || 4000,
    // host: 'localhost',
    host: '0.0.0.0', // This is needed for prod
    routes: {
      cors: {
        origin: [
          'http://localhost:3000',
          'https://odf-collab.vercel.app',
          'https://odfcollab.com',
          'https://www.odfcollab.com',
          'https://staging.odfcollab.com',
        ],
      },
    },
  });

  // Plugins
  await server.register(require('@hapi/inert'));

  // Routes
  router(server);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
