import apiHandler from '@server/apiHandler';
import { docApi_updateDocumentName } from '@server/doc/update/name';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    PATCH: { handler: docApi_updateDocumentName, checkAuth: true },
  })(req, res);
