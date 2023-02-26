import apiHandler from '@server/apiHandler';
import { docApi_updateDocumentHtml } from '@server/doc/update/html';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  apiHandler({
    PATCH: { handler: docApi_updateDocumentHtml, checkAuth: true },
  })(req, res);
