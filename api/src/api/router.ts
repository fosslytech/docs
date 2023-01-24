import { Server, ServerRoute } from '@hapi/hapi';
import * as convertSvc from './convert.service';

const ROUTES: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    },
  },
  {
    method: 'POST',
    path: '/convert/odt2html',
    handler: convertSvc.convertOdt2Html,
  },
];

export default (server: Server) => {
  ROUTES.forEach((route) => {
    server.route(route);
  });
};
