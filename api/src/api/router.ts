import { Server, ServerRoute } from '@hapi/hapi';
import * as convertSvc from './convert.service';

const ROUTES: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Hello World!';
    },
  },
  {
    method: 'POST',
    path: '/convert/to-html',
    options: {
      payload: {
        parse: true,
        allow: 'multipart/form-data',
        multipart: { output: 'data' },
      },
    },
    handler: convertSvc.convert2Html,
  },
  {
    method: 'POST',
    path: '/convert/to-odt',
    options: {
      payload: {
        parse: true,
        allow: 'multipart/form-data',
        multipart: { output: 'data' },
      },
    },
    handler: convertSvc.convert2Odt,
  },
  {
    method: 'GET',
    path: '/convert/new-doc',
    handler: convertSvc.getNewDoc,
  },
];

export default (server: Server) => {
  ROUTES.forEach((route) => {
    server.route(route);
  });
};
