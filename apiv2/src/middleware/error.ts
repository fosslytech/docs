import { ErrorHandler } from 'elysia';

export const middleware_Error: ErrorHandler = ({ code, error, set }) => {
  switch (code) {
    case 'NOT_FOUND':
      set.status = 404;

      return JSON.stringify({ error: true, message: 'Not Found', data: null });

    case 'INTERNAL_SERVER_ERROR':
      set.status = 500;

      return JSON.stringify({ error: true, message: 'Internal Server Error', data: null });

    default:
      set.status = 400;

      return JSON.stringify({ error: true, message: error.message.toString(), data: null });
  }
};
