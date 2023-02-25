import apiHandler from '@server/apiHandler';

import { keyApi_selectApiKey } from '@server/key/select';
import { keyApi_createApiKey } from '@server/key/create';
import { keyApi_deleteApiKey } from '@server/key/delete';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    GET: { handler: keyApi_selectApiKey, checkAuth: true },
    POST: { handler: keyApi_createApiKey, checkAuth: true },
    DELETE: { handler: keyApi_deleteApiKey, checkAuth: true },
  })(req, res);
