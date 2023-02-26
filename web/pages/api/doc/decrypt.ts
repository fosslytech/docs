import apiHandler from '@server/apiHandler';
import { docApi_decryptDocument } from '@server/doc/decrypt';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    POST: { handler: docApi_decryptDocument, checkAuth: true },
  })(req, res);
