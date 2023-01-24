'use strict';

import Hapi, { Server } from '@hapi/hapi';
import router from './api/router';

const init = async () => {
  const server: Server = Hapi.server({
    port: process.env.PORT || 4000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

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
