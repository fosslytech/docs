import { Server, ServerRoute } from '@hapi/hapi';
import * as convertSvc from './convert.service';
import * as downloadSvc from './download.service';

const ROUTES: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'I run on Arch, btw!';
    },
  },

  // Convert API
  {
    method: 'POST',
    path: '/convert',
    options: {
      payload: {
        parse: true,
        allow: 'multipart/form-data',
        multipart: { output: 'data' },
      },
    },
    handler: convertSvc.convert,
  },
  {
    method: 'GET',
    path: '/new-doc',
    handler: convertSvc.getNewDoc,
  },

  // Download API
  {
    method: 'POST',
    path: '/prepare-download',
    handler: downloadSvc.prepareDownload,
  },
  {
    method: 'GET',
    path: '/download',
    handler: downloadSvc.download,
  },
];

export default (server: Server) => {
  ROUTES.forEach((route) => {
    server.route(route);
  });
};
